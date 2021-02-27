import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {useStyles} from './styles/welcomeStyles';
import withStyles from "@material-ui/core/styles/withStyles";
import {Strings} from "../../localization/strings"
import {Images} from "../../constants/images";

function Welcome(props) {
    const {classes} = props;
    const {
        main, titleBox, imageBox, title, bannerImg,
        imageInnerBox, imageInnerBoxTitle, desc,image
    } = classes;

    return (
        <>
            <Box className={main}>
                <Box className={titleBox}>
                    <Typography variant={'h1'} className={title}>
                        Optimization Through Digitization
                    </Typography>
                </Box>
                <Box className={imageBox}>
                    <Box className={image}>
                        <img src={Images.banner} className={bannerImg}/>
                    </Box>
                    <Box className={imageInnerBox}>
                        <Typography variant={'h3'} className={imageInnerBoxTitle}>
                            Who We Are?
                        </Typography>
                        <Typography variant={'subtitle2'} className={desc}>
                            SFED is one of the fastest-growing start-ups in the Agri Tech sector and one of the very few
                            companies providing end-to-end solutions and services to the farming community in India.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default withStyles(useStyles, {withTheme: true})(Welcome);