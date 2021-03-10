import React, {useEffect, useState} from "react";
import FirebaseDataService from "../../../../services/firebase.service";
import {auth} from "../../../../services/firebase";
import {Box, Divider, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {useStyles} from "../internSurvey/viewSurveyStyles";
import {
    retailSurveyAgentInfo,
    retailSurveyCustomerData,
    retailSurveyDairyData,
    retailSurveyFruitsAndVegetablesData,
    retailSurveyGroceryData,
    retailSurveyHealthAndHygieneInfo,
    retailSurveyNonVegetarianData
} from "./constants";


function ViewRetailSurvey(props) {
    const {classes} = props;
    const {main, container, dataBox, labelBox, inputBox, containerTitle, divider} = classes;
    const [survey, setSurvey] = useState('')

    useEffect(() => {
        checkIfLoggedIn();
        getSurvey(props.match.params.id)
    }, [])

    const checkIfLoggedIn = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                // console.log(user);
            } else {
                // No user is signed in.
                // console.log("logged out");
                // props.history.push("/login")
            }
        });
    }

    const deleteSurvey = (id) => {
        FirebaseDataService.deleteSurvey(id)
            .then(() => {
                // console.log("Deleted survey successfully!");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const getSurvey = (id) => {
        FirebaseDataService.getSurvey(id, 'retail')
            .then((data) => {
                setSurvey(data.data())
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const _getDateTime = (time) => {
        return time ? (new Date(time).toDateString() + " - " + new Date(time).toLocaleTimeString()) : 'N/A'
    }


    return (
        <Box className={main}>
            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Agent Details
                </Typography>
            </Box>
            <Box className={container}>
                {retailSurveyAgentInfo.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey ? (item.dateType ? _getDateTime(survey[item.value]) : survey[item.value]) : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Customer Details
                </Typography>
            </Box>
            <Box className={container}>
                {retailSurveyCustomerData.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.basic_info && survey?.basic_info[item.value] ? survey?.basic_info[item.value] : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Dairy Details
                </Typography>
            </Box>
            <Box className={container}>
                {retailSurveyDairyData.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.dairy_info && survey?.dairy_info[item.value] ? survey?.dairy_info[item.value] : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Fruits and vegetables Details
                </Typography>
            </Box>
            <Box className={container}>
                {retailSurveyFruitsAndVegetablesData.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        {item.value === "purchase_source" && survey?.fruits_veg_info?.purchase_source?.length > 0 ?
                            survey?.fruits_veg_info?.purchase_source.map((item1, index) => {
                                return <Box className={inputBox} key={index}>
                                    {item1 ? item1 : 'N/A'}
                                </Box>
                            })
                            :
                            (item.value === "exotic_vegetables" && survey?.fruits_veg_info?.exotic_vegetables?.length > 0 ?
                                    survey?.fruits_veg_info?.exotic_vegetables.map((item1, index) => {
                                        return <Box className={inputBox} key={index}>
                                            {item1 ? item1 : 'N/A'}
                                        </Box>
                                    })
                                    : <Box className={inputBox}>
                                        {survey?.fruits_veg_info && survey?.fruits_veg_info[item.value] ? survey?.fruits_veg_info[item.value] : "N/A"}
                                    </Box>
                            )}
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Grocery Details
                </Typography>
            </Box>
            <Box className={container}>
                {retailSurveyGroceryData.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        {item.value === "grocery_purchase_source" && survey?.grocery_info?.grocery_purchase_source?.length > 0 ?
                            survey?.grocery_info?.grocery_purchase_source.map((item1, index) => {
                                return <Box className={inputBox} key={index}>
                                    {item1 ? item1 : 'N/A'}
                                </Box>
                            })
                            :
                            (item.value === "sugar_products" && survey?.grocery_info?.sugar_products?.length > 0 ?
                                    survey?.grocery_info?.sugar_products.map((item1, index) => {
                                        return <Box className={inputBox} key={index}>
                                            {item1 ? item1 : 'N/A'}
                                        </Box>
                                    })
                                    :
                                    <Box className={inputBox}>
                                        {survey?.grocery_info && survey?.grocery_info[item.value] ? survey?.grocery_info[item.value] : "N/A"}
                                    </Box>
                            )}
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Non-vegetarian food Details
                </Typography>
            </Box>
            <Box className={container}>
                {retailSurveyNonVegetarianData.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        {item.value === "meat_products_consumed" && survey?.nonveg_food_info?.meat_products_consumed?.length > 0 ?
                            survey?.nonveg_food_info?.meat_products_consumed.map((item1, index) => {
                                return <Box className={inputBox} key={index}>
                                    {item1 ? item1 : 'N/A'}
                                </Box>
                            })
                            :
                            (item.value === "meat_type" && survey?.nonveg_food_info?.meat_type?.length > 0 ?
                                    survey?.nonveg_food_info?.meat_type.map((item1, index) => {
                                        return <Box className={inputBox} key={index}>
                                            {item1 ? item1 : 'N/A'}
                                        </Box>
                                    })
                                    :
                                    <Box className={inputBox}>
                                        {survey?.nonveg_food_info && survey?.nonveg_food_info[item.value] ? survey?.nonveg_food_info[item.value] : "N/A"}
                                    </Box>
                            )}
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Health and hygiene Details
                </Typography>
            </Box>
            <Box className={container}>
                {retailSurveyHealthAndHygieneInfo.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.health_hygiene_info && survey?.health_hygiene_info[item.value] ? survey?.health_hygiene_info[item.value] : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

        </Box>
    );
}

export default withStyles(useStyles, {withTheme: true})(ViewRetailSurvey);