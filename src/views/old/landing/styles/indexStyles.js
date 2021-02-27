import {createStyles} from "@material-ui/core";

export const useStyles = (theme) => createStyles({
    main: {
        display: "flex",
        margin: "auto",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0),
            flexDirection: "column",
        },
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(0),
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 4),
            maxWidth: "1440px"
        },
    }
})