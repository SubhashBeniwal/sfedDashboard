import React, {useState} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import {Box, Button, Typography} from "@material-ui/core";
import {useStyles} from "./sideBarStyles";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import DashboardIcon from '@material-ui/icons/Dashboard';
import StorageIcon from '@material-ui/icons/Storage';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import {ArrowRight} from "@material-ui/icons";

function Sidebar(props) {
    const {classes} = props;
    const {
        main, categoryBox, subCategoryBox, sideBar, menuItem,
    } = classes;
    const [clickedItem, setClickedItem] = useState('')


    return (
        <>
            <Box className={main}>
                {/*<ProSidebar toggled={true} >*/}
                {/*    <Menu iconShape="circle" popperArrow={false} className={sideBar}>*/}
                {/*        <MenuItem icon={<DashboardIcon/>}>SFED Dashboard</MenuItem>*/}
                {/*        <SubMenu title="Scouting Data" icon={<StorageIcon/>} defaultOpen={true} className={menuItem}>*/}
                {/*            <MenuItem*/}
                {/*                className={menuItem}*/}
                {/*                onClick={(Item)=> {*/}
                {/*                setClickedItem('scoutingSurvey')*/}
                {/*                console.log(clickedItem)*/}
                {/*                props.selectedItem(clickedItem)*/}
                {/*            }}>Surveys</MenuItem>*/}
                {/*        </SubMenu>*/}
                {/*        <SubMenu title="Farmer Data" icon={<LocalShippingIcon/>}>*/}
                {/*            <MenuItem onClick={()=> {*/}
                {/*                setClickedItem('farmerSurvey')*/}
                {/*                console.log(clickedItem)*/}
                {/*                props.selectedItem(clickedItem)*/}
                {/*            }}>Surveys</MenuItem>*/}
                {/*        </SubMenu>*/}
                {/*    </Menu>*/}
                {/*</ProSidebar>;*/}

                <Box className={categoryBox}>
                    <Typography variant={"h5"}>
                         DASHBOARD
                    </Typography>
                </Box>
                <Box className={categoryBox}>
                    <Typography variant={"h6"}>
                        Scouting
                    </Typography>
                </Box>
                <Box
                    className={subCategoryBox}
                    onClick={(Item)=> {
                        setClickedItem('scoutingSurvey')
                        console.log(clickedItem)
                        props.selectedItem(clickedItem)
                    }}
                >
                    <Typography variant={"body1"}>
                        Scouting
                    </Typography>
                </Box>

                <Box className={categoryBox}>
                    <Typography variant={"h6"}>
                        Farmer
                    </Typography>
                </Box>
                <Box
                    className={subCategoryBox}
                    onClick={()=> {
                        setClickedItem('farmerSurvey')
                        console.log(clickedItem)
                        props.selectedItem(clickedItem)
                    }}
                >
                    <Typography variant={"body1"}>
                        Farmer
                    </Typography>
                </Box>

                <Box className={categoryBox}>
                    <Typography variant={"h6"}>
                        Upload Banners
                    </Typography>
                </Box>
                <Box
                    className={subCategoryBox}
                    onClick={()=> {
                        setClickedItem('uploadBanners')
                        console.log(clickedItem)
                        props.selectedItem(clickedItem)
                    }}
                >
                    <Typography variant={"body1"}>
                        Upload Ad Banners
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

export default withStyles(useStyles, {withTheme: true})(Sidebar);