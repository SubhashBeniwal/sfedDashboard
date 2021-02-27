import React, {useEffect, useState} from "react";
import FirebaseDataService from "../../../../services/firebase.service";
import {auth} from "../../../../services/firebase";
import {Box, Divider, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {useStyles} from "../internSurvey/viewSurveyStyles";
import {
    surveyAgentInfo,
    surveyAlliedServicesInfo,
    surveyCropInfo,
    surveyFarmerInfo,
    surveyFarmerTechniqueInfo, surveyOtherInfo,
    surveySoilInfo
} from "./constants";


function ViewFarmBookSurvey(props) {
    const {classes} = props;
    const {main, container, dataBox, labelBox, inputBox, divider, containerTitle} = classes;
    const [survey, setSurvey] = useState('');

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
                props.history.push("/login")
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
        FirebaseDataService.getSurvey(id, 'farmbook')
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
                {surveyAgentInfo.map((item, index) => {
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
                {surveyFarmerInfo.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.farmer_info && survey?.farmer_info[item.value] ? survey?.farmer_info[item.value] : 'N/A'}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Crop Details
                </Typography>
            </Box>
            <Box className={container}>
                {survey?.crop_info && survey?.crop_info.map((crop, index) => {
                    return surveyCropInfo.map((item, index) => {
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
                    Soil Details
                </Typography>
            </Box>
            <Box className={container}>
                {surveySoilInfo.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.soil_info && survey?.soil_info[item.value] ? survey?.soil_info[item.value] : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Farm Technique Details
                </Typography>
            </Box>
            <Box className={container}>
                {surveyFarmerTechniqueInfo.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.farm_technique_info && survey?.farm_technique_info[item.value] ? survey?.farm_technique_info[item.value] : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Allied Services Details
                </Typography>
            </Box>
            <Box className={container}>
                {surveyAlliedServicesInfo.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.allied_service_info && survey?.allied_service_info[item.value] ? survey?.allied_service_info[item.value] : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
            <Divider className={divider}/>

            <Box className={containerTitle}>
                <Typography variant={"h5"}>
                    Other Details
                </Typography>
            </Box>
            <Box className={container}>
                {surveyOtherInfo.map((item, index) => {
                    return <Box key={index} className={dataBox}>
                        <Box className={labelBox}>
                            <Typography variant={"body1"}>
                                {item.label}
                            </Typography>
                        </Box>
                        <Box className={inputBox}>
                            {survey?.other_info && survey?.other_info[item.value] ? survey?.other_info[item.value] : "N/A"}
                        </Box>
                    </Box>
                })}
            </Box>
        </Box>
    );
}

export default withStyles(useStyles, {withTheme: true})(ViewFarmBookSurvey);