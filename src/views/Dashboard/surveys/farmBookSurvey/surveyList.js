import React, {Component, useEffect, useState} from "react";
import FirebaseDataService from "../../../../services/firebase.service";
// import {Table, Button} from 'reactstrap';
import {auth} from "../../../../services/firebase";
import Table from "components/Table/Table.js";
import Button from "@material-ui/core/Button";
import GridItem from "../../../../components/Grid/GridItem";
import Card from "../../../../components/Card/Card";
import CardHeader from "../../../../components/Card/CardHeader";
import CardBody from "../../../../components/Card/CardBody";
import GridContainer from "../../../../components/Grid/GridContainer";
import {makeStyles} from "@material-ui/core/styles";
import {Redirect, Switch} from "react-router-dom";
import Box from "@material-ui/core/Box";
import {Search} from "@material-ui/icons";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    },
    headerTitleBox: {
        display: "flex !important",
        justifyContent: "space-between"
    },
    searchBox: {
        display: "flex !important",
        justifyContent: "flex-end"
    },
    inputBox: {
        display: "flex !important",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: "5px"
    },
    input: {
        border: 0
    },
    searchIcon:{
        cursor: "pointer"
    }
};

const useStyles = makeStyles(styles);

function FarmbookSurvey(props) {
    const classes = useStyles();
    const [surveyList, setSurveyList] = useState([])
    const [title, setTitle] = useState('')
    const [all, setAll] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [filteredArray, setFilteredArray] = useState([])
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                // console.log(user);
            } else {
                // No user is signed in.
                // console.log("logged out");
                props.history.push("/login")
            }
        });
    }, [])
    let tableData1 = []
    useEffect(() => {
        console.log(filteredArray)
        FirebaseDataService.getSurveys('farmbook').onSnapshot(onDataChange);
    }, [])
    const onDataChange = (items) => {
        let surveys = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });

        // console.log(surveys)
        setSurveyList(surveys)

    }

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const onChangeDescription = (e) => {
        setAll(e.target.value)
    }

    const groupArrayOfObjects = (list, key) => {
        return list.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }

    const saveCommodities = () => {
        let list = JSON.parse(all);
        let states = groupArrayOfObjects(list, 'state');
        let keys = Object.keys(states);
        keys.forEach(key => {
            pushState(key, {all: JSON.stringify(states[key])});
        });
    }

    const pushState = (state, data) => {
        FirebaseDataService.setCommodity(state, data)
            .then(() => {
                // console.log("Updated commodities successfully!");
                setSubmitted(true)
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const deleteSurvey = (id) => {
        FirebaseDataService.deleteSurvey(id, 'farmbook')
            .then(() => {
                // console.log("Deleted survey successfully!");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const openSurvey = (e, id) => {
        // return <Redirect from="/admin" to={"/admin/internSurvey/" + id} />
        // e.preventDefault()
        props.history.push("farmbookSurvey" + id)
    }

    const _getDateTime = (time) => {
        return time ? (new Date(time).toDateString() + " - " + new Date(time).toLocaleTimeString()) : 'NA'
    }
    let tableData = []

    const getTableValues = () => {
        {
            surveyList.map((item, index) => {
                let data = []
                tableData.push(data)
                return data.push(item.id,
                    item.farmer_name,
                    <>{item.survey_state},
                        {item.survey_state},
                        {item.survey_district},
                        {item.survey_tehsil},
                        {item.survey_village}
                    </>,
                    item.phone,
                    item.farm_technique_info.acreage_planted,
                    item.farm_technique_info.area_in_acreage_irrigation,
                    item.soil_info.commodity_sold_to,
                    _getDateTime(item.time),
                    item.agentName,
                    item.agentId,
                    item.have_storage_facility,
                    item.storage_space_available,
                    <>
                        <Button onClick={(e) => {
                            e.preventDefault()
                            deleteSurvey(item.id)
                        }} outline size="sm" color="danger">
                            Delete</Button>
                        <hr/>
                        <Button onClick={(e) => {
                            // e.preventDefault()
                            openSurvey(e, item.id)
                        }} outline size="sm" color="primary">
                            View</Button>
                    </>
                )
            })
        }
        // console.log(tableData)
        // console.log(filteredArray)
        tableData = filteredArray !== [] ? tableData : filteredArray
        return tableData
    }
    tableData1 = getTableValues()

    const onValueChange = (e) =>{
        setSearchText(e.target.value)
        // console.log(searchText)
    }
    useEffect(()=>{
        let arr = [];
        let newArray = [];
        tableData.map((item,index)=>{
            return item.filter((item1,index1)=>{
                return item1 === searchText && newArray.push(item)
            })
        })
        arr.push(newArray)
        setFilteredArray(newArray)
        // console.log(arr)
        // console.log(newArray)
    },[searchText])

    const onSearch = () => {
        tableData1 = getTableValues()
        console.log(tableData1)
        return tableData1
    }


    return (
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary" classname={classes.headerTitleBox}>
                        <GridContainer>
                            <GridItem xs={6} sm={6} md={6}>
                                <h4 className={classes.cardTitleWhite}>Farmbook Surveys</h4>
                            </GridItem>
                            <GridItem xs={6} sm={6} md={6}>
                                <Box className={classes.searchBox}>
                                    <Box className={classes.inputBox}>
                                        <input
                                            className={classes.input}
                                            placeholder={"Search"}
                                            onChange={(e)=>{
                                                onValueChange(e)
                                            }}
                                        />
                                        <Search
                                            className={classes.searchIcon}
                                            color={"secondary"}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onSearch()
                                            }}/>
                                    </Box>
                                </Box>
                            </GridItem>
                        </GridContainer>
                        {/*<p className={classes.cardCategoryWhite}>*/}
                        {/*    Here is a subtitle for this table*/}
                        {/*</p>*/}
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={
                                [
                                    "#",
                                    "Farmer's First Name",
                                    "Address",
                                    "Mobile",
                                    "Total Cultivated Land (in acres)",
                                    "Crops Sold for Farm Earning (in percent)",
                                    "Type of Sale",
                                    "Time/Date",
                                    "Agent name",
                                    "Agent ID",
                                    "Do you have a storage facility?",
                                    "Total storage Space?",
                                    "Actions"
                                ]
                            }
                            tableData={tableData1}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>

    )
        ;


}

export default FarmbookSurvey;

