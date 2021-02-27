import React from 'react';
import {Box, Button, Typography} from "@material-ui/core";
import {useStyles} from './styles/mobileAppStyles';
import withStyles from "@material-ui/core/styles/withStyles";
import {Images} from "../../constants/images";

function MobileApp(props) {
    const {classes} = props;
    const {
        main, contentBox, imgBox, loudSpeaker, text, comingSoonText,
        inputBox, input, mobileImg,
    } = classes;

    return (
        <>
            <Box className={main}>
                <Box className={contentBox}>
                    <img src={Images.loudSpeakerIcon} className={loudSpeaker}/>
                    <Typography variant={'h3'} className={text} gutterBottom>
                        S.F.E.D Mobile App
                    </Typography>
                    <Typography variant={'body2'} className={comingSoonText} gutterBottom>
                        Coming Soon!
                    </Typography>
                    {/*<Box className={inputBox}>*/}
                    {/*    <input className={input} placeholder={"Phone Number"}/>*/}
                    {/*    <Button variant={"contained"} color={"primary"}>*/}
                    {/*        Get Beta App Link*/}
                    {/*    </Button>*/}
                    {/*</Box>*/}
                </Box>
                <Box className={imgBox}>
                    <img src={Images.mobileImg} className={mobileImg}/>
                </Box>
            </Box>
        </>
    );
}

export default withStyles(useStyles, {withTheme: true})(MobileApp);