import React, {Component, useState} from "react";
import FirebaseDataService from "../../services/firebase.service";
import {auth} from "../../services/firebase";
import withStyles from "@material-ui/core/styles/withStyles";
import {useStyles} from "./loginStyles";
import Box from "@material-ui/core/Box";
import {Images} from "../../constants/images";
import {Button, Typography} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {Spinner} from "reactstrap";

function Login(props) {
    const {classes} = props;
    const {
        main, leftBox, rightBox, logoBox, logo, logoTitle, loginBox,
        loginBoxHeader, loginBoxHeaderTitle, loginBoxBody, formGroup,
        formControl, submitButton, passWrapper, spinner,
    } = classes;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [loading, setLoading] = useState(false);

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const onLogout = () => {
        auth.signOut().then(() => {
            // Sign-out successful.
            setLoggedIn(false)
        }).catch((error) => {
            // An error happened.
        });

    }

    const login = () => {
        setLoading(true)
        let data = {email, password};

        FirebaseDataService.login(data)
            .then((user) => {
                console.log(user);
                console.log("Logged in successfully!");
                setLoggedIn(true)
                props.history.push("/dashboard")
                setLoading(false)
            })
            .catch((e) => {
                console.log(e);
                setLoading(false)
            });
    }

    const toggleEye = () => {
        setHidden(!hidden)
    }

    return (
        <>
            <Box className={main}>
                <Box className={leftBox}>
                    <Box className={logoBox}>
                        <img src={Images.sfedWhiteLogo} className={logo}/>
                        <Typography variant={"h5"} className={logoTitle}>
                            Optimization Through Digitization
                        </Typography>
                    </Box>
                </Box>
                <Box className={rightBox}>
                    <Box className={loginBox}>
                        <Box className={loginBoxHeader}>
                            <Typography variant={"h6"} className={loginBoxHeaderTitle}>
                                Sign in to SFED
                            </Typography>
                        </Box>
                        <Box className={loginBoxBody}>
                            <Box className={formGroup}>
                                <label htmlFor="title">E-Mail</label>
                                <input
                                    type="text"
                                    className={formControl}
                                    id="title"
                                    required
                                    value={email}
                                    onChange={onChangeEmail}
                                    name="title"
                                />
                            </Box>

                            <Box className={formGroup}>
                                <label htmlFor="description">Password</label>
                                {/*<input*/}
                                {/*    type="password"*/}
                                {/*    className={formControl}*/}
                                {/*    id="description"*/}
                                {/*    required*/}
                                {/*    value={password}*/}
                                {/*    onChange={onChangePassword}*/}
                                {/*    name="description"*/}
                                {/*/>*/}
                                <Box className={passWrapper}>
                                    <input
                                        type={hidden ? "text" : "password"}
                                        className={formControl}
                                        id="description"
                                        required
                                        value={password}
                                        onChange={onChangePassword}
                                        name="description"
                                    />
                                    {hidden && <i onClick={() => toggleEye()}>{<Visibility/>}</i>}
                                    {!hidden && <i onClick={() => toggleEye()}>{<VisibilityOff/>}</i>}
                                </Box>
                            </Box>
                            <Box className={formGroup}>
                                <Box>
                                    <Button
                                        variant={"contained"}
                                        color={"primary"}
                                        onClick={login}
                                        className={submitButton}
                                    >
                                        {loading ? <Spinner className={spinner}/> :" Sign In"}
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>


        // <div className="submit-form">
        //     {loggedIn ? (
        //         <div>
        //             <h4>You submitted successfully!</h4>
        //             <button className="btn btn-success" onClick={onLogout}>
        //                 Logout
        //             </button>
        //         </div>
        //     ) : (
        //         <div>
        //             <div className="form-group">
        //                 <label htmlFor="title">Email</label>
        //                 <input
        //                     type="text"
        //                     className="form-control"
        //                     id="title"
        //                     required
        //                     value={email}
        //                     onChange={onChangeEmail}
        //                     name="title"
        //                 />
        //             </div>
        //
        //             <div className="form-group">
        //                 <label htmlFor="description">Password</label>
        //                 <input
        //                     type="password"
        //                     className="form-control"
        //                     id="description"
        //                     required
        //                     value={password}
        //                     onChange={onChangePassword}
        //                     name="description"
        //                 />
        //             </div>
        //
        //             <button onClick={login} className="btn btn-success">
        //                 Login
        //             </button>
        //         </div>
        //     )}
        // </div>
    );
}

export default withStyles(useStyles, {withTheme: true})(Login);