import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {useStyles} from "./styles/servicesStyles";
import {Box, Hidden, Typography} from "@material-ui/core";
import {servicesContent} from "../../defaultValues/servicesValues";

function Services(props) {
    const {classes} = props;
    const {
        main, titleBox, title, servicesBox, leftBox, rightBox, leftInnerBox, iconBox,
        serviceTitle, serviceSubTitle, descBox, desc, mainImgBox, subImgBox, subImg1Box,
        icon, servicesInnerBox, rightBottom, leftBottom, leftOutBottom, img
    } = classes;

    return (
        <>
            <Box className={main}>
                <Box className={titleBox}>
                    <Typography variant={'h3'} className={title}>
                        Our Services
                    </Typography>
                </Box>
                <Hidden mdUp>
                <Box className={servicesBox}>
                    {servicesContent.map((item, index) => {
                        return (<Box className={servicesInnerBox}>
                                <Box className={leftBox}>
                                    <Box className={leftInnerBox}>
                                        <Box className={iconBox}>
                                            <img src={item.icon} className={icon}/>
                                        </Box>
                                        <Box className={titleBox}>
                                            <Typography variant={'caption'} className={serviceTitle}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant={'body2'} className={serviceSubTitle}>
                                                {item.subTitle}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box className={descBox}>
                                        <Typography variant={'subtitle2'} className={desc}>
                                            {item.desc}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box className={rightBox}>
                                    <Box className={mainImgBox}>
                                        <img src={item.mainImg} className={img}/>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
                </Hidden>
                <Hidden smDown>
                    <Box className={servicesBox}>
                        {servicesContent.map((item, index) => {
                            return (<Box className={servicesInnerBox}>
                                    {(item.id !== "2" && item.id !== "4" && item.id !== "6") && <Box className={leftBox}>
                                        <Box className={leftInnerBox}>
                                            <Box className={iconBox}>
                                                <img src={item.icon} className={icon}/>
                                            </Box>
                                            <Box className={titleBox}>
                                                <Typography variant={'caption'} className={serviceTitle}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant={'body2'} className={serviceSubTitle}>
                                                    {item.subTitle}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box className={descBox}>
                                            <Typography variant={'subtitle2'} className={desc}>
                                                {item.desc}
                                            </Typography>
                                        </Box>
                                    </Box>}
                                    <Box className={rightBox}>
                                        <Box className={mainImgBox}>
                                            <img src={item.mainImg} className={img}/>
                                        </Box>
                                    </Box>
                                    {(item.id !== "1" && item.id !== "3" && item.id !== "5") && <Box className={leftBox}>
                                        <Box className={leftInnerBox}>
                                            <Box className={iconBox}>
                                                <img src={item.icon} className={icon}/>
                                            </Box>
                                            <Box className={titleBox}>
                                                <Typography variant={'caption'} className={serviceTitle}>
                                                    {item.title}
                                                </Typography>
                                                <Typography variant={'body2'} className={serviceSubTitle}>
                                                    {item.subTitle}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box className={descBox}>
                                            <Typography variant={'subtitle2'} className={desc}>
                                                {item.desc}
                                            </Typography>
                                        </Box>
                                    </Box>}
                                </Box>
                            )
                        })}
                    </Box>
                </Hidden>
            </Box>
        </>
    );
}

export default withStyles(useStyles, {withTheme: true})(Services);