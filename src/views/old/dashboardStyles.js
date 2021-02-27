

import {createStyles} from "@material-ui/core";

export const useStyles = (theme) => createStyles({
    main:{
        backgroundColor: "rgba(145,194,195,0.2)"
    },
    container:{
        // padding: theme.spacing(5,3),
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    sideBarBox:{
        backgroundColor: "rgba(132,220,222,0.2)",
        // width: "20%",
        height: "100vh"
    },
    contentBox:{
        padding: theme.spacing(5,3),
        width: "100%",
        height: "100vh"
    },
    statisticsBox:{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        flexWrap: "wrap"
    },
    cardTitleBox:{
        width: "100%",
        backgroundColor: "rgba(134,136,136,0.2)",
        padding: theme.spacing(1, 2),
        borderRadius: "10px"
    },
    statisticsCard:{
        width: "48%",
        boxShadow: '0 12px 31px 0 rgba(0, 37, 91, 0.13)',
        backgroundColor: "#ffffff",
        padding: theme.spacing(3),
        margin: theme.spacing(2,0),
        borderRadius: "10px"
    },
    titleBox:{
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        margin: theme.spacing(0,0,2),
    },
    csvBox:{
        boxShadow:" 0px 1px 5px 2px #ccc",
        background:"linear-gradient(to left, #454e53 5%, #5D676D 100%)",
        backgroundColor:"#454e53",
        borderRadius:"6px",
        border:"0",
        cursor:"pointer",
        color:"#ffffff",
        fontSize:"15px",
        fontWeight:"bold",
        padding:"6px 24px",
        textDecoration:"none",
    }
});