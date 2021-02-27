import {createStyles} from "@material-ui/core";

export const useStyles = (theme) => createStyles({
    main: {
        backgroundColor: theme.palette.primary.main,

        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 2, 8),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(2, 2, 8),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(2, 5, 8),
        },
    },
    titleBox: {
        padding: theme.spacing(4, 0, 6),
        width: '100%'
    },
    title: {
        textAlign: "center",
        color: theme.palette.primary.contrastText
    },
    imageBox: {
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.16)',
    },
    bannerImg:{
        width: "100%",
        [theme.breakpoints.down('sm')]: {
           height: '200px'
        },
        [theme.breakpoints.up('sm')]: {
           height: '200px'
        },
        [theme.breakpoints.up('md')]: {
           height: "auto"
        },
    },
    imageInnerBox: {
        backgroundColor: theme.palette.secondary.light,
        borderRadius: '8px',
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.16)',
        position: 'absolute',
        [theme.breakpoints.down('sm')]: {
            bottom: 20,
            left: 17,
            right: 17,
            padding: theme.spacing(2, 1),
        },
        [theme.breakpoints.up('sm')]: {
            bottom: 20,
            left: 20,
            right: 20,
            padding: theme.spacing(3, 0),
        },
        [theme.breakpoints.up('md')]: {
            bottom: 40,
            left: 140,
            right: 140,
            padding: theme.spacing(3, 5),
        },
    },
    imageInnerBoxTitle: {
        textAlign: "center",
        color: '#333333'
    },
    desc: {
        textAlign: "center",
        color: '#333333'
    },
    image: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3, 2, 34),
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(3, 2, 22),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(5, 5, 15),
        },
    }

})