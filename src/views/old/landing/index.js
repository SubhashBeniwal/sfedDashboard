import React from 'react';
import {Box, Typography} from "@material-ui/core";
import {useStyles} from './styles/indexStyles';
import withStyles from "@material-ui/core/styles/withStyles";
import {Strings} from "../../localization/strings"
import Welcome from "./welcome";
import Header from "../../components/header";
import Services from "./services";
import MobileApp from "./mobileApp";
import ContactUs from "./contactUs";
import Footer from "../../components/footer";

function Landing(props) {
    const {classes} = props;
    const {main} = classes;

    return (
        <>
            <Box className={main}>
                <Header/>
                <Welcome/>
                <Services/>
                <MobileApp/>
                <ContactUs/>
                <Footer/>
            </Box>
        </>
    );
}

export default withStyles(useStyles,{withTheme: true})(Landing);