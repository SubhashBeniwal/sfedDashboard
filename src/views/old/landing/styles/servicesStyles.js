import {createStyles} from "@material-ui/core";

export const useStyles = (theme) => createStyles({
    main: {
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(10, 2),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(10, 2),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(10, 5),
        },
    },
    titleBox: {
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            padding: theme.spacing(2, 0),
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: "center",
            padding: theme.spacing(2, 0),
        },
        [theme.breakpoints.up('md')]: {
            textAlign: "left",
            padding: theme.spacing(4, 0, 6),
        },
    },
    title: {
        textAlign: "center",
        color: '#333333'
    },
    servicesBox:{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        flexWrap: "wrap"
    },
    servicesInnerBox:{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            padding: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: "column",
            padding: theme.spacing(0),
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: "row",
            padding: theme.spacing(10, 5),
        },
        // flexWrap: "wrap"
    },
    leftBox: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(5, 0),
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            padding: theme.spacing(5, 0),
        },
        [theme.breakpoints.up('md')]: {
            width: '48%',
            padding: theme.spacing(0),
        },
    },
    rightBox: {
        position:"relative",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '48%',
        },
    },
    leftInnerBox:{
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column"
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: "column"
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: "row"
        },
    },
    iconBox:{
        margin: theme.spacing(0, 2, 0,0),
    },
    icon:{
        height: "80px",
        width: "80px"
    },
    serviceTitle:{
        color: theme.palette.primary.main,
        textTransform: "uppercase",
        fontWeight:"bold"
    },
    serviceSubTitle:{
        fontWeight:"bold"
    },
    descBox:{
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0),
            textAlign: "center",
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(0),
            textAlign: "center",
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(0, 0, 0, 12),
            textAlign: "left",
        },
    },
    mainImgBox:{
        position: "relative",

    },
    img:{
        [theme.breakpoints.down('sm')]: {
            width: "100%"
        },
        [theme.breakpoints.up('sm')]: {
            width: "100%"
        },
        [theme.breakpoints.up('md')]: {
            width: "100%"
        },
    },
    subImgBox:{
        zIndex:1,
        position: "absolute",
    },
    subImg1Box:{
        zIndex:1,
        position: "absolute",
        bottom: -100,
        left: 230,
    },
    rightBottom:{
        bottom: -100,
        right: 50
    },
    leftBottom:{
        bottom: -100,
        left: 50,
    },
    leftOutBottom:{
        bottom: -70,
        left: -50,
    }
})