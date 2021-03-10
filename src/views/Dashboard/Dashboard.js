import React, {useEffect, useState} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import {makeStyles} from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import {bugs, website, server} from "variables/general.js";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import {surveyAgentInfo, surveyCropInfo, surveyFarmerInfo, surveySaleInfo} from "./surveys/internSurvey/constants";
import FirebaseDataService from "../../services/firebase.service";
import {auth} from "../../services/firebase";
import moment from 'moment';


const useStyles = makeStyles(styles);

export default function Dashboard(props) {
    const classes = useStyles();
    const [surveyIntern, setSurveyIntern] = useState([]);
    const [surveyInternLength, setSurveyInternLength] = useState('');
    const [surveyKisan, setSurveyKisan] = useState([]);
    const [surveyKisanLength, setSurveyKisanLength] = useState('');
    const [surveyFarmbook, setSurveyFarmbook] = useState([]);
    const [surveyFarmbookLength, setSurveyFarmbookLength] = useState('');
    const [surveyRetail, setSurveyRetail] = useState([]);
    const [surveyRetailLength, setSurveyRetailLength] = useState('');
    const [surveyInput, setSurveyInput] = useState([]);
    const [surveyInputLength, setSurveyInputLength] = useState('');
    const [surveyAnimal, setSurveyAnimal] = useState([]);
    const [surveyAnimalLength, setSurveyAnimalLength] = useState('');
    const [surveyEquipment, setSurveyEquipment] = useState([]);
    const [surveyEquipmentLength, setSurveyEquipmentLength] = useState('');

    const [clickedItem, setClickedItem] = useState('scoutingSurvey');

    const allSurveys = [
        {title: "Agent Details", survey: surveyAgentInfo,},
        {title: "Farmer Details", survey: surveyFarmerInfo,},
        {title: "Crop Details", survey: surveyCropInfo,},
        {title: "Sale Details", survey: surveySaleInfo,},
    ];

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                console.log(user);
            } else {
                // No user is signed in.
                console.log("logged out");
                // props.history.push("/login")
            }
        });
        getInternSurvey()
        getKisanSurvey()
        getFarmbookSurvey()
        getRetailSurvey()
        getInputSurvey()
        getAnimalSurvey()
        getEquipmentSurvey()
    }, []);

    const getInternSurvey = (id) => {
        FirebaseDataService.getSurveys('intern').onSnapshot(onDataChangeIntern);
    }
    const getKisanSurvey = (id) => {
        FirebaseDataService.getSurveys('kisan').onSnapshot(onDataChangeKisan);
    }
    const getFarmbookSurvey = (id) => {
        FirebaseDataService.getSurveys('farmbook').onSnapshot(onDataChangeFarmbook);
    }
    const getRetailSurvey = (id) => {
        FirebaseDataService.getSurveys('retail').onSnapshot(onDataChangeRetail);
    }
    const getInputSurvey = (id) => {
        FirebaseDataService.getSurveys('input').onSnapshot(onDataChangeInput);
    }
    const getAnimalSurvey = (id) => {
        FirebaseDataService.getSurveys('animal').onSnapshot(onDataChangeAnimal);
    }
    const getEquipmentSurvey = (id) => {
        FirebaseDataService.getSurveys('equipment').onSnapshot(onDataChangeEquipment);
    }

    const onDataChangeIntern = (items) => {
        let surveys = [];
        let survey = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });

        // allSurveys.map((surv, index) => {
        //     return (surv.survey.map((item, index) => {
        //         return (survey.push(
        //             {
        //                 key: item.label,
        //                 value: (surveys.map((item1, index) => {
        //                     return item1[item.value];
        //                 }))
        //             }
        //         ))
        //     }))
        // })
        setSurveyInternLength(surveys.length)
        console.log(surveys.time)
        surveys.map((item, index) => {
            return survey.push(item);
        })
        setSurveyIntern(survey)
    }

    const onDataChangeKisan = (items) => {
        let surveys = [];
        let survey = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });
        setSurveyKisanLength(surveys.length)
        surveys.map((item, index) => {
            return survey.push(item);
        })
        setSurveyKisan(survey)
    }
    const onDataChangeFarmbook = (items) => {
        let surveys = [];
        let survey = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });
        setSurveyFarmbookLength(surveys.length)
        surveys.map((item, index) => {
            return survey.push(item);
        })
        setSurveyFarmbook(survey)
    }
    const onDataChangeRetail = (items) => {
        let surveys = [];
        let survey = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });
        setSurveyRetailLength(surveys.length)
        surveys.map((item, index) => {
            return survey.push(item);
        })
        setSurveyRetail(survey)
    }

    const onDataChangeInput = (items) => {
        let surveys = [];
        let survey = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });
        setSurveyInputLength(surveys.length)
        surveys.map((item, index) => {
            return survey.push(item);
        })
        setSurveyInput(survey)
    }
    const onDataChangeAnimal = (items) => {
        let surveys = [];
        let survey = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });
        setSurveyAnimalLength(surveys.length)
        surveys.map((item, index) => {
            return survey.push(item);
        })
        setSurveyAnimal(survey)
    }
    const onDataChangeEquipment = (items) => {
        let surveys = [];
        let survey = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });
        setSurveyEquipmentLength(surveys.length)
        surveys.map((item, index) => {
            return survey.push(item);
        })
        setSurveyEquipment(survey)
    }

    const allJsonData = [
        {
            id: "surveyIntern",
            data: surveyIntern,
        },
        {
            id: "surveyFarmbook",
            data: surveyFarmbook,
        },
        {
            id: "surveyKisan",
            data: surveyKisan,
        },
        {
            id: "surveyRetail",
            data: surveyRetail,
        },
        // surveyInput,
        // surveyAnimal,
        // surveyEquipment,

    ]
    const dataFile = (item) => {
        return allJsonData.filter((jsonData) => {
            console.log(jsonData.id)
            console.log(item.jsonData === jsonData.id && jsonData.data)
            return item.jsonData === jsonData.id ? jsonData.data : null
        })
    }

    const dataCards = [
        {
            title: "Intern",
            value: surveyInternLength,
            color: "warning",
            icon: <Store/>,
            url: 'internSurvey'
        },
        {
            title: "Kisan",
            value: surveyKisanLength,
            color: "success",
            icon: <Store/>,
            url: 'kisanSurvey'
        },
        {
            title: "Farmbook",
            value: surveyFarmbookLength,
            color: "danger",
            icon: <Store/>,
            url: 'farmbookSurvey'
        },
        {
            title: "Retail",
            value: surveyRetailLength,
            color: "info",
            icon: <Store/>,
            url: 'retailSurvey'
        },

    ]

    return (
        <div>
            <GridContainer>
                {dataCards.map((item, index) => {
                    return <GridItem xs={12} sm={6} md={3} key={index} onClick={(e)=>{
                        e.preventDefault();
                        props.history.push(`${item.url}`)
                    }}>
                        <Card  style={{cursor: "pointer"}}>
                            <CardHeader color={item.color} stats icon>
                                <CardIcon color={item.color}>
                                    {item.icon}
                                </CardIcon>
                                <p></p>
                                <h6 className={classes.cardTitle}>{item.title}</h6>
                                <p className={classes.cardCategory}>Total Surveys</p>
                                <h3 className={classes.cardTitle}>
                                    {item.value}
                                </h3>
                            </CardHeader>
                            <CardFooter stats>
                                <div className={classes.stats}>
                                    <p><b>Till </b></p>
                                    <p>{" - "}</p>
                                    <p>{moment().format('DD/mm/yyyy')}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </GridItem>
                })}
            </GridContainer>
            {/*<GridContainer>*/}
            {/*  <GridItem xs={12} sm={12} md={4}>*/}
            {/*    <Card chart>*/}
            {/*      <CardHeader color="success">*/}
            {/*        <ChartistGraph*/}
            {/*          className="ct-chart"*/}
            {/*          data={dailySalesChart.data}*/}
            {/*          type="Line"*/}
            {/*          options={dailySalesChart.options}*/}
            {/*          listener={dailySalesChart.animation}*/}
            {/*        />*/}
            {/*      </CardHeader>*/}
            {/*      <CardBody>*/}
            {/*        <h4 className={classes.cardTitle}>Daily Sales</h4>*/}
            {/*        <p className={classes.cardCategory}>*/}
            {/*          <span className={classes.successText}>*/}
            {/*            <ArrowUpward className={classes.upArrowCardCategory} /> 55%*/}
            {/*          </span>{" "}*/}
            {/*          increase in today sales.*/}
            {/*        </p>*/}
            {/*      </CardBody>*/}
            {/*      <CardFooter chart>*/}
            {/*        <div className={classes.stats}>*/}
            {/*          <AccessTime /> updated 4 minutes ago*/}
            {/*        </div>*/}
            {/*      </CardFooter>*/}
            {/*    </Card>*/}
            {/*  </GridItem>*/}
            {/*  <GridItem xs={12} sm={12} md={4}>*/}
            {/*    <Card chart>*/}
            {/*      <CardHeader color="warning">*/}
            {/*        <ChartistGraph*/}
            {/*          className="ct-chart"*/}
            {/*          data={emailsSubscriptionChart.data}*/}
            {/*          type="Bar"*/}
            {/*          options={emailsSubscriptionChart.options}*/}
            {/*          responsiveOptions={emailsSubscriptionChart.responsiveOptions}*/}
            {/*          listener={emailsSubscriptionChart.animation}*/}
            {/*        />*/}
            {/*      </CardHeader>*/}
            {/*      <CardBody>*/}
            {/*        <h4 className={classes.cardTitle}>Email Subscriptions</h4>*/}
            {/*        <p className={classes.cardCategory}>Last Campaign Performance</p>*/}
            {/*      </CardBody>*/}
            {/*      <CardFooter chart>*/}
            {/*        <div className={classes.stats}>*/}
            {/*          <AccessTime /> campaign sent 2 days ago*/}
            {/*        </div>*/}
            {/*      </CardFooter>*/}
            {/*    </Card>*/}
            {/*  </GridItem>*/}
            {/*  <GridItem xs={12} sm={12} md={4}>*/}
            {/*    <Card chart>*/}
            {/*      <CardHeader color="danger">*/}
            {/*        <ChartistGraph*/}
            {/*          className="ct-chart"*/}
            {/*          data={completedTasksChart.data}*/}
            {/*          type="Line"*/}
            {/*          options={completedTasksChart.options}*/}
            {/*          listener={completedTasksChart.animation}*/}
            {/*        />*/}
            {/*      </CardHeader>*/}
            {/*      <CardBody>*/}
            {/*        <h4 className={classes.cardTitle}>Completed Tasks</h4>*/}
            {/*        <p className={classes.cardCategory}>Last Campaign Performance</p>*/}
            {/*      </CardBody>*/}
            {/*      <CardFooter chart>*/}
            {/*        <div className={classes.stats}>*/}
            {/*          <AccessTime /> campaign sent 2 days ago*/}
            {/*        </div>*/}
            {/*      </CardFooter>*/}
            {/*    </Card>*/}
            {/*  </GridItem>*/}
            {/*</GridContainer>*/}
            {/*<GridContainer>*/}
            {/*  <GridItem xs={12} sm={12} md={6}>*/}
            {/*    <CustomTabs*/}
            {/*      title="Tasks:"*/}
            {/*      headerColor="primary"*/}
            {/*      tabs={[*/}
            {/*        {*/}
            {/*          tabName: "Bugs",*/}
            {/*          tabIcon: BugReport,*/}
            {/*          tabContent: (*/}
            {/*            <Tasks*/}
            {/*              checkedIndexes={[0, 3]}*/}
            {/*              tasksIndexes={[0, 1, 2, 3]}*/}
            {/*              tasks={bugs}*/}
            {/*            />*/}
            {/*          )*/}
            {/*        },*/}
            {/*        {*/}
            {/*          tabName: "Website",*/}
            {/*          tabIcon: Code,*/}
            {/*          tabContent: (*/}
            {/*            <Tasks*/}
            {/*              checkedIndexes={[0]}*/}
            {/*              tasksIndexes={[0, 1]}*/}
            {/*              tasks={website}*/}
            {/*            />*/}
            {/*          )*/}
            {/*        },*/}
            {/*        {*/}
            {/*          tabName: "Server",*/}
            {/*          tabIcon: Cloud,*/}
            {/*          tabContent: (*/}
            {/*            <Tasks*/}
            {/*              checkedIndexes={[1]}*/}
            {/*              tasksIndexes={[0, 1, 2]}*/}
            {/*              tasks={server}*/}
            {/*            />*/}
            {/*          )*/}
            {/*        }*/}
            {/*      ]}*/}
            {/*    />*/}
            {/*  </GridItem>*/}
            {/*  <GridItem xs={12} sm={12} md={6}>*/}
            {/*    <Card>*/}
            {/*      <CardHeader color="warning">*/}
            {/*        <h4 className={classes.cardTitleWhite}>Employees Stats</h4>*/}
            {/*        <p className={classes.cardCategoryWhite}>*/}
            {/*          New employees on 15th September, 2016*/}
            {/*        </p>*/}
            {/*      </CardHeader>*/}
            {/*      <CardBody>*/}
            {/*        <Table*/}
            {/*          tableHeaderColor="warning"*/}
            {/*          tableHead={["ID", "Name", "Salary", "Country"]}*/}
            {/*          tableData={[*/}
            {/*            ["1", "Dakota Rice", "$36,738", "Niger"],*/}
            {/*            ["2", "Minerva Hooper", "$23,789", "Curaçao"],*/}
            {/*            ["3", "Sage Rodriguez", "$56,142", "Netherlands"],*/}
            {/*            ["4", "Philip Chaney", "$38,735", "Korea, South"]*/}
            {/*          ]}*/}
            {/*        />*/}
            {/*      </CardBody>*/}
            {/*    </Card>*/}
            {/*  </GridItem>*/}
            {/*</GridContainer>*/}
        </div>
    );
}
