import {createStyles} from "@material-ui/core";
import {Images} from "../../../constants/images";

export const useStyles = (theme) => createStyles({
    main: {
        width: "100%",
        // height: '300px',
        // backgroundColor: theme.palette.secondary.main,
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        overflow: "hidden",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(10, 2),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(10, 2),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(10, 8),
        },
    },
    contentBox: {
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "column"
    },
    title: {
        textAlign: "center"
    },
    subTitle: {
        textAlign: "center",
        maxWidth: '710px'
    },
    formOuterBox: {
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.16)',
        backgroundColor: '#ffffff',
        margin: theme.spacing(4, 0),
        width: "100%",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            padding: '10px ',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: "column",
            padding: '10px',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: "row",
            padding: '30px 46px 30px 18px',
        },
    },
    addressBox: {
        backgroundColor: 'rgba(54, 152, 67, 0.2)',
        borderRadius: '8px',
        backgroundImage: `url(` +Images.sfedBackgroundLogo +`)`,
        backgroundRepeat:' no-repeat, repeat',
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            width: '100%',
            padding: theme.spacing(4, 2),
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: "center",
            width: '100%',
            padding: theme.spacing(4, 2),
        },
        [theme.breakpoints.up('md')]: {
            textAlign: "left",
            width: '40%',
            padding: theme.spacing(4, 15,4,2),
            // height: "100vh"
        },
    },
    addressDetails:{
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(3,2, 0),
            maxWidth: "auto",
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            padding: theme.spacing(3,2, 0),
            maxWidth: "auto",
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            padding: theme.spacing(3,0, 0),
            maxWidth: "360px",
        },
    },
    formBox: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(4, 2),
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            padding: theme.spacing(4, 2),
        },
        [theme.breakpoints.up('md')]: {
            width: '60%',
            padding: theme.spacing(4,6),
        },
    }

});