import {createStyles} from "@material-ui/core";

export const useStyles = (theme) => createStyles({
    main: {
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        width: "100%"
    },
    categoryBox: {
        backgroundColor: "rgba(0,153,20,0.9)",
        width: "100%",
        padding: theme.spacing(2,4),
        color: "#ffffff"
    },
    subCategoryBox: {
        backgroundColor: "rgba(0,153,20,0.7)",
        width: "100%",
        padding: theme.spacing(2,6),
        color: "#ffffff",
        cursor: "pointer"
    },
    sideBar:{
        backgroundColor: "rgba(0,153,20,0.7)"
    },
    menuItem:{
        color: "#ffffff",
        backgroundColor: "rgba(0,153,20,0.5)"
    }
});