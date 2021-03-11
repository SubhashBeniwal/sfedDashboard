import React, {Component, useRef, useState} from "react";
import {storage} from "../../../services/firebase";
import withStyles from "@material-ui/core/styles/withStyles";
import {useStyles} from "./indexStyles";
import Box from "@material-ui/core/Box";
import {Button, CircularProgress, Typography} from "@material-ui/core";
import {PhotoCamera, Visibility, VisibilityOff} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import FirebaseDataService from "../../../services/firebase.service";

function BannerUpload(props) {
    const {classes} = props;
    const {
        main, rightBox, loginBox, button,
        loginBoxHeader, loginBoxHeaderTitle, loginBoxBody, formGroup,
        image, submitButton, spinner,
    } = classes;
    const [loading, setLoading] = useState(false);

    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");

    function handleChange(e) {
        setFile(e.target.files[0]);
    }

    function handleUpload(e) {
        setLoading(true)
        e.preventDefault();
        const uploadTask = storage.ref(`/banners/${file.name}`).put(file);
        uploadTask.on("state_changed", console.log, console.error, () => {
            setLoading(false)
            storage
                .ref("banners")
                .child(file.name)
                .getDownloadURL()
                .then((url) => {
                    setFile(null);
                    FirebaseDataService.updateBanner('wvre6X8KVkMpwRpFxHkG', {
                        id: "wvre6X8KVkMpwRpFxHkG",
                        img: url
                    }).then(()=>{
                        setURL(url)
                    });
                });
        });
    }

    return (
        <>
            <Box className={main}>
                <Box className={rightBox}>
                    <Box className={loginBox}>
                        <Box className={loginBoxHeader}>
                            <Typography variant={"h6"} className={loginBoxHeaderTitle}>
                               Upload
                            </Typography>
                        </Box>
                        <Box className={loginBoxBody}>
                            <Box className={formGroup}>
                                <input
                                    accept="image/*"
                                    className={classes.input}
                                    id="icon-button-photo"
                                    onChange={handleChange}
                                    type="file"
                                    style={{ display: "none" }}
                                />
                                <Box className={button}>
                                <label htmlFor="icon-button-photo">
                                    <IconButton color="primary" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                                    </Box >
                                {file && <Button
                                    variant={"contained"}
                                    component="span"
                                    color={"primary"}
                                    onClick={handleUpload}
                                    className={submitButton}
                                >
                                    {loading ? <CircularProgress className={spinner}/> :" Upload Image"}
                                </Button>}
                                <Box className={image}>
                                    <Box>
                                        <img src={url} alt="" className={image}/>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default withStyles(useStyles, {withTheme: true})(BannerUpload);