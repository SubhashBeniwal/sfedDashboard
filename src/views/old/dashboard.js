import React, {useEffect, useState} from "react";
import {Box, Button, Typography, withStyles} from "@material-ui/core";
import {useStyles} from "./dashboardStyles";
// import {auth} from "../../../firebase";
import {farmerStatisticsData, statisticsData} from "../../defaultValues/dashboardValues";
import CsvDownload from 'react-json-to-csv'
import FirebaseDataService from "../../services/firebase.service";
import {surveyAgentInfo, surveyCropInfo, surveyFarmerInfo, surveySaleInfo} from "../Dashboard/surveys/internSurvey/constants";
import Sidebar from "./sidebar";

function DashBoard(props) {
    const {classes} = props;
    const {
        main, contentBox, container, sideBarBox, contentContainer, statisticsBox,
        statisticsCard, titleBox, actionBox, cardTitleBox, csvBox, uploadBox,
    } = classes;
    const [surveyIntern, setSurveyIntern] = useState([]);
    const [surveyKisan, setSurveyKisan] = useState([]);
    const [surveyFarmbook, setSurveyFarmbook] = useState([]);
    const [surveyRetail, setSurveyRetail] = useState([]);
    const [surveyInput, setSurveyInput] = useState([]);
    const [surveyAnimal, setSurveyAnimal] = useState([]);
    const [surveyEquipment, setSurveyEquipment] = useState([]);

    const [clickedItem, setClickedItem] = useState('scoutingSurvey');

    const allSurveys = [
        {title: "Agent Details", survey: surveyAgentInfo,},
        {title: "Farmer Details", survey: surveyFarmerInfo,},
        {title: "Crop Details", survey: surveyCropInfo,},
        {title: "Sale Details", survey: surveySaleInfo,},
    ];

    useEffect(() => {
        // auth.onAuthStateChanged((user) => {
        //     if (user) {
        //         // User is signed in.
        //         console.log(user);
        //     } else {
        //         // No user is signed in.
        //         console.log("logged out");
        //         props.history.push("/login")
        //     }
        // });
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

    return (<>
            <Box className={main}>
                <Box className={container}>
                    <Box className={sideBarBox}>
                        <Sidebar selectedItem={(selectedItem) => {
                            setClickedItem(selectedItem)
                            console.log(selectedItem)
                            console.log(clickedItem)
                        }}
                        />
                    </Box>
                    <Box className={contentBox}>
                        <Box className={contentContainer}>
                            <Box className={cardTitleBox}>
                                <Typography variant={"h4"}>
                                    {clickedItem === 'scoutingSurvey' ? "Scouting Statistics" : (clickedItem === 'uploadBanners' ? "Upload Banners" : "Farmer Statistics")}
                                </Typography>
                            </Box>
                            {clickedItem !== 'uploadBanners' ?
                                <Box className={statisticsBox}>
                                    {(clickedItem === 'scoutingSurvey' ? statisticsData : farmerStatisticsData).map((item, index) => {
                                        return <Box className={statisticsCard} key={index}>
                                            <Box className={titleBox}>
                                                <Typography variant={"h5"}>
                                                    {item.title}
                                                </Typography>
                                                {item.jsonData !== "" &&
                                                <Box>
                                                    <CsvDownload
                                                        data={
                                                            item.jsonData === "surveyIntern" ? surveyIntern :
                                                                (item.jsonData === "surveyFarmbook" ? surveyFarmbook :
                                                                    (item.jsonData === "surveyKisan" ? surveyKisan :
                                                                        (item.jsonData === "surveyRetail" ? surveyRetail :
                                                                                (item.jsonData === "surveyAnimal" ? surveyAnimal :
                                                                                    (item.jsonData === "surveyInput" ? surveyInput :
                                                                                        surveyEquipment))
                                                                        )))}
                                                        // data={dataFile(item)}
                                                        filename={item.title + ".csv"}
                                                        className={csvBox}
                                                    >
                                                        Download CSV
                                                    </CsvDownload>
                                                </Box>}
                                            </Box>
                                            <Box className={actionBox}>
                                                <Button
                                                    variant={"contained"}
                                                    fullWidth
                                                    color={"primary"}
                                                    onClick={() => {
                                                        props.history.push(item.url)
                                                    }}
                                                >
                                                    {item.buttonText}
                                                </Button>
                                            </Box>
                                        </Box>
                                    })}
                                </Box>
                                :
                                <Box className={uploadBox}>
                                    <Typography variant={"h4"}>
                                        Banner
                                    </Typography>
                                </Box>
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default withStyles(useStyles, {withTheme: true})(DashBoard);