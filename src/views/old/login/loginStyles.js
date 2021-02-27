import {createStyles} from "@material-ui/core";
import {Images} from "../../constants/images";

export const useStyles = (theme) => createStyles({
    main: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    leftBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "22%",
        height: "100vh",
        backgroundColor: "rgba(204,204,204,0.3)",
        backgroundImage: `url(${Images.loginBackground})`
    },
    logo: {
        margin: theme.spacing(0, 0, 2, 0),
        height: "130px",
    },
    logoBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    logoTitle: {
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center"
    },
    rightBox:{
        width: "78%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loginBox:{
        width: "450px",
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
        justifyContent: "start",
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
    passWrapper:{
        width: "100%",
        textAlign: "right",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#f2f2f2",
        padding: theme.spacing(0,2,0,0),
        },
    spinner:{
        height: "20px",
        width: "20px",
        margin: theme.spacing(0.2,2.8)
    }


});