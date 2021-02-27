

import {createStyles} from "@material-ui/core";

export const useStyles = (theme) => createStyles({
    nameMobile: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0),
            flexDirection: "column",
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(0),
            flexDirection: "column",
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(0, 0, 3),
            flexDirection: "row",
        },
    },
    input: {
        padding: theme.spacing(1.4, 2),
        borderRadius: "8px",
        border: '1px solid',
        margin: theme.spacing(0, 2, 0, 0),
        fontSize: '12px',
        width: '100%',
        '&:focus': {
            outline: 'none'
        }
    },
    inputBox: {
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: theme.spacing(2, 0),
        },
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            padding: theme.spacing(2, 0),
        },
        [theme.breakpoints.up('md')]: {
            width: '240px',
            padding: theme.spacing(0),
        },
    },
    inputBoxMobile: {
        width: '100%',
        flexGrow: 1
    },
    textarea: {
        width: '100%',
        borderRadius: "8px",
    },
    button: {
        padding: theme.spacing(1, 8),
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(3, 0, 0),
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(3, 0, 0),
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(0),
            width: '240px',
        },
    },
    inputBoxMobileOuter: {
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0),
            width: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(0),
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(0, 2, 0, 0),
            width: 'auto',
        },
    },
    spinner:{
        width: '23px',
        height: '23px'
    }
});