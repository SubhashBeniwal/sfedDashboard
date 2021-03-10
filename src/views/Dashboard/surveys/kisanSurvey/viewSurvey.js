import React, {useEffect, useState} from "react";
import FirebaseDataService from "../../../../services/firebase.service";
import {auth} from "../../../../services/firebase";
import {Box, Divider, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {useStyles} from "../internSurvey/viewSurveyStyles";
import {
    kisanSurveyAgentInfo,
    kisanSurveyAgriInputData,
    kisanSurveyConsumptionCommodity,
    kisanSurveyCropData, kisanSurveyCurrentCropData,
    kisanSurveyfarmerData
} from "./constants";
import {surveyAgentInfo, surveyCropInfo} from "../farmBookSurvey/constants";


function ViewKisanSurvey(props) {
    const {classes} = props;
    const {main, container, dataBox, labelBox, inputBox, divider, containerTitle} = classes;
    const [survey, setSurvey] = useState('')

    const Allsurvey = [
        {
            title: "Farmer Details",
            survey: kisanSurveyfarmerData,
        },
        {
            title: "Crop Details",
            survey: kisanSurveyCropData,
        },
        {
            title: "Agri Input Details",
            survey: kisanSurveyAgriInputData,
        },
        {
            title: "Consumption by commodity",
            survey: kisanSurveyConsumptionCommodity,
        },
    ]

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
        FirebaseDataService.getSurvey(id, 'kisan')
            .then((data) => {
                // console.log(data.data());
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
                {kisanSurveyAgentInfo.map((item, index) => {
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
                    Farmer Details
                </Typography>
            </Box>
            <Box className={container}>
                {kisanSurveyfarmerData.map((item, index) => {
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
                    Crop Details (Rabi crop sow)
                </Typography>
            </Box>
            <Box className={container}>
                {survey?.rabi_season_info && survey?.rabi_season_info.map((crop, index) => {
                        return kisanSurveyCropData.map((item, index) => {
                            return <Box key={index} className={dataBox}>
                                {item.value === "commodity_sold_to" ?
                                    survey?.rabi_season_info.map((item1, index) => {
                                        return <> <Box className={labelBox}>
                                            <Typography variant={"body1"}>
                                                {item.label}
                                            </Typography>
                                        </Box>
                                            <Box className={inputBox}>
                                                {item1[item.value] ? item1[item.value] : 'N/A'}
                                            </Box>
                                        </>
                                    }) : <>
                                        <Box className={labelBox}>
                                            <Typography variant={"body1"}>
                                                {item.label}
                                            </Typography>
                                        </Box>
                                        <Box className={inputBox}>
                                            {crop[item.value] ? crop[item.value] : 'N/A'}
                                        </Box>
                                    </>}
                            </Box>
                        })
                    }
                )}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Crop Details (Kharif crop sow)
                </Typography>
            </Box>

            <Box className={container}>
                {survey?.kharif_season_info && survey?.kharif_season_info.map((crop, index) => {
                        return kisanSurveyCropData.map((item, index) => {
                            return <Box key={index} className={dataBox}>
                                {item.value === "commodity_sold_to" ?
                                    survey?.kharif_season_info.map((item1, index) => {
                                        return <> <Box className={labelBox}>
                                            <Typography variant={"body1"}>
                                                {item.label}
                                            </Typography>
                                        </Box>
                                            <Box className={inputBox}>
                                                {item1[item.value] ? item1[item.value] : 'N/A'}
                                            </Box>
                                        </>
                                    }) : <>
                                        <Box className={labelBox}>
                                            <Typography variant={"body1"}>
                                                {item.label}
                                            </Typography>
                                        </Box>
                                        <Box className={inputBox}>
                                            {crop[item.value] ? crop[item.value] : 'N/A'}
                                        </Box>
                                    </>}
                            </Box>
                        })
                    }
                )}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Crop Details (Current crop sown)
                </Typography>
            </Box>

            <Box className={container}>
                {survey?.current_crop_sown_rabi && survey?.current_crop_sown_rabi.map((crop, index) => {
                    return kisanSurveyCurrentCropData.map((item, index) => {
                        return <Box key={index} className={dataBox}>
                            <Box className={labelBox}>
                                <Typography variant={"body1"}>
                                    {item.label}
                                </Typography>
                            </Box>
                            <Box className={inputBox}>
                                {crop[item.value] ? crop[item.value] : "N/A"}
                            </Box>
                        </Box>
                    })
                })}
            </Box>
            <Divider className={divider}/>


            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Agri input Details
                </Typography>
            </Box>
            <Box className={container}>
                {kisanSurveyAgriInputData.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.agri_input_info && survey?.agri_input_info[item.value] ? survey?.agri_input_info[item.value] : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Consumption by commodity Details
                </Typography>
            </Box>
            <Box className={container}>
                {survey?.input_consumption_by_commodity && survey?.input_consumption_by_commodity.map((crop, index) => {
                    return kisanSurveyConsumptionCommodity.map((item, index) => {
                        return <Box key={index} className={dataBox}>
                            <Box className={labelBox}>
                                <Typography variant={"body1"}>
                                    {item.label}
                                </Typography>
                            </Box>
                            <Box className={inputBox}>
                                {crop[item.value] ? crop[item.value] : "N/A"}
                            </Box>
                        </Box>
                    })
                })}
            </Box>
            <Divider className={divider}/>
        </Box>
    );
}

export default withStyles(useStyles, {withTheme: true})(ViewKisanSurvey);