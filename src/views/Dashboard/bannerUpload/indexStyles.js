import {createStyles} from "@material-ui/core";
import {Images} from "../../../constants/images";

export const useStyles = (theme) => createStyles({
    main: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    rightBox:{
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
    },
    loginBox:{
        width: "750px",
        // height: "560px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.16)"
    },
    loginBoxHeader:{
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(3),
        borderRadius: "8px 8px 0 0",
    },
    loginBoxHeaderTitle:{
        color: "#ffffff",
        fontWeight: "500",
        textAlign: "center"
    },
    loginBoxBody:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // height: "100%",
        padding: theme.spacing(5),
    },
    formGroup:{
        margin: theme.spacing(3,0),
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
    },
    formGroupButton:{
        margin: theme.spacing(3,0),
        display: "flex",
        justifyContent: "start",
    },
    formControl:{
        borderRadius: "8px",
        backgroundColor: "#f2f2f2",
        border: 0,
        padding: theme.spacing(1,2),
        color: "#333333",
        '&:focus':{
            outline: "none"
        },
        flexGrow: 1
    },
    submitButton:{
        padding: theme.spacing(1,5),
        '&:focus':{
            outline: "none"
        },
    },
    spinner:{
        color: "#ffffff",
        height: "20px",
        width: "20px",
        margin: theme.spacing(0.2,2.8)
    },
    image:{
        width: "100%",
        textAlign: "right",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: theme.spacing(4,0,0)
    },
    button:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#f2f2f2",
        padding: theme.spacing(1),
        margin: theme.spacing(0,0,3)
    }


});