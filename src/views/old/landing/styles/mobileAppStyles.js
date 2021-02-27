import {createStyles} from "@material-ui/core";

export const useStyles = (theme) => createStyles({
    main: {
        width: "100%",
        // height: '300px',
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        overflow: "hidden",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            padding: theme.spacing(5, 15 ,0),
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: "column",
            padding: theme.spacing(5, 15 ,0),
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: "row",
            padding: theme.spacing(5, 15 ,0),
        },
    },
    contentBox: {
        [theme.breakpoints.down('sm')]: {
           textAlign: "center"
        },
        [theme.breakpoints.up('sm')]: {
            textAlign: "center"
        },
        [theme.breakpoints.up('md')]: {
            textAlign: "left"
        },
    },
    imgBox: {},
    text: {
        fontWeight: "400"
    },
    comingSoonText: {
        color: '#d90429',
        fontWeight: "bold"
    },
    inputBox: {
        display: "flex",
        justifyContent: 'flex-start',
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: "column",
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: "row",
        },
    },
    input: {
        padding: theme.spacing(1.4, 2),
        borderRadius: "8px",
        border: 0,
        fontSize: '12px',
        '&:focus': {
            outline: 'none'
        },
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0, 0, 3),
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(0, 0, 3),
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(0, 2, 0, 0),
        },
    },
    mobileImg:{
        height: "302px"
    }
});