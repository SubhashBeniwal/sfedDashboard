import {createStyles} from "@material-ui/core";

export const useStyles = (theme) => createStyles({
    main: {
        // backgroundColor: "rgba(145,194,195,0.2)",
        padding: theme.spacing(5, 10),
        minHeight: '100vh'
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "space-around",
        flexWrap: "wrap",
        border: '1px solid #cccccc',
        borderRadius: '8px',
        padding: theme.spacing(2, 3),
        backgroundColor: 'rgba(245,244,244,0.4)'
    },
    inputBox: {
        border: '1px solid #cccccc',
        borderRadius: '8px',
        padding: theme.spacing(1, 3),
        backgroundColor: 'rgba(204,204,204,0.3)',
        minHeight: '30px',
        margin: "auto",
        display: "flex",
        alignItems: "center",
    },
    dataBox: {
        width: '30%',
        padding: theme.spacing(1, 0),
    },
    divider: {
        margin: theme.spacing(4, 0),
        padding: theme.spacing(0.1, 0),
        backgroundColor: "#cccccc"
    },
    containerTitle: {
        padding: theme.spacing(3, 0, 1),
    }

});