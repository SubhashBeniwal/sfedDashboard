import React, {useEffect, useState} from "react";
import FirebaseDataService from "../../../../services/firebase.service";
import {auth} from "../../../../services/firebase";
import {Box, Divider, Typography} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {useStyles} from "./viewSurveyStyles";
import {surveyAgentInfo, surveyCropInfo, surveyFarmerInfo, surveySaleInfo} from "./constants";


function ViewInternSurvey(props) {
    const {classes} = props;
    const {main, container, dataBox, labelBox, inputBox, divider, containerTitle} = classes;
    const [survey, setSurvey] = useState('');

    const allSurveys = [
        {title: "Agent Details", survey: surveyAgentInfo,},
        {title: "Farmer Details", survey: surveyFarmerInfo,},
        {title: "Crop Details", survey: surveyCropInfo,},
        {title: "Sale Details", survey: surveySaleInfo,},
    ];

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
        FirebaseDataService.getSurvey(id, 'intern')
            .then((data) => {
                setSurvey(data.data())
                console.log(survey)
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
            {allSurveys.map((surv, index) => {
                const arrLength = allSurveys.length
                return <Box key={index}>
                    <Box className={containerTitle}>
                        <Typography variant={"h5"}>
                            {surv.title}
                        </Typography>
                    </Box>
                    <Box className={container}>
                        {surv.survey.map((item, index) => {
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
                    {index + 1 < arrLength && <Divider className={divider}/>}
                </Box>
            })}
        </Box>
    );
}

export default withStyles(useStyles, {withTheme: true})(ViewInternSurvey);