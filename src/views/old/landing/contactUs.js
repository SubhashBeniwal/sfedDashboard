import React from 'react';
import {Box, Button, Typography} from "@material-ui/core";
import {useStyles} from './styles/contactUsStyles';
import withStyles from "@material-ui/core/styles/withStyles";
import {Images} from "../../constants/images";
import {addressContent} from "../../defaultValues/addressValues";
import ContactUsForm from "./contactUsForm";

function ContactUs(props) {
    const {classes} = props;
    const {
        main, contentBox, title, subTitle, formBox, formOuterBox,
        addressBox, addressDetails, addressItem,
    } = classes;

    return (
        <>
            <Box className={main}>
                <Box className={contentBox}>
                    <Typography variant={"h2"} className={title} gutterBottom>
                        Contact Us
                    </Typography>
                    <Typography variant={"subtitle2"} className={subTitle} gutterBottom>
                        Please fill out the quick form below and we will be in touch with lightning speed. Old fashioned
                        phone calls work too.
                    </Typography>
                </Box>
                <Box className={formOuterBox}>
                    <Box className={addressBox}>
                        <img src={Images.sfedLogo}/>
                        <Box className={addressDetails}>
                            {addressContent.map((item, index) => {
                                return <Box className={addressItem}>
                                    <Typography variant={"subtitle2"} gutterBottom>
                                        <b>{item.title}</b>
                                    </Typography>
                                    <Typography variant={"body2"} gutterBottom>
                                        {item.subTitle}
                                    </Typography>
                                </Box>
                            })}
                        </Box>
                    </Box>
                    <Box className={formBox}>
                        <ContactUsForm/>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default withStyles(useStyles, {withTheme: true})(ContactUs);