import React, {useEffect, useState} from 'react'
import Box from "@material-ui/core/Box";
import ChipSelect from "../../components/common/chipSelect";
import {initialContactUsFormState, options} from "../../defaultValues/addressValues";
import Typography from "@material-ui/core/Typography";
import {Button, withStyles} from "@material-ui/core";
import {useStyles} from './styles/contactUsFormStyles';
import Firebase from "firebase";
import {Spinner} from "reactstrap";

const ContactUsForm = props => {
    const {classes} = props;
    const {
        nameMobile, input, inputBox, textarea, button, inputBoxMobile,
        inputBoxMobileOuter, spinner
    } = classes;
    const [form, setForm] = useState(initialContactUsFormState);
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);


    // Chipset change handler
    const handleChangeChipSelect = (name, value) => {
        setFormState(name, value);
    };

    // Set form state
    const setFormState = function (name, value) {
        setForm({
            ...form,
            [name]: value
        });
    };

    //value change
    const onValueChangeHandler = (name, value) => {
        setFormState(name, value);
    }

    // useEffect(() => {
    //     console.log(form)
    // }, [form]);

    //store form data to firebase
    const writeUserDataToFirebase = () => {
        setLoading(true)
        const db = Firebase.firestore();
        const leadsRef = db.collection('contactUs').doc();
        leadsRef.set(form, {merge: true}).then((r) => {
            setSubmit(true) ;
            setLoading(false);
        }).catch((err)=>{
            setLoading(false);
        })
    }
    return (
        <>
            <Box>
                <Box>
                    <Typography variant={'body1'} gutterBottom>
                        I am a
                    </Typography>
                </Box>
                <Box>
                    <ChipSelect
                        options={options.occupation}
                        // selectedItem={form.gender}
                        onChange={(value) => handleChangeChipSelect('occupation', value)}
                    />
                </Box>
                <Box className={nameMobile}>
                    <Box className={inputBoxMobileOuter}>
                        <Box className={inputBoxMobile}>
                            <Typography variant={'body1'} gutterBottom>
                                My name is
                            </Typography>
                        </Box>
                        <Box>
                            <input
                                name={"name"}
                                className={input}
                                placeholder={'Please enter your name'}
                                onChange={(e) => {
                                    onValueChangeHandler('name', e.target.value)
                                }}
                            />
                        </Box>

                    </Box>
                    <Box className={inputBox}>
                        <Box>
                            <Typography variant={'body1'} gutterBottom>
                                My mobile number is
                            </Typography>
                        </Box>
                        <Box>
                            <input
                                name={"mobile"}
                                className={input}
                                placeholder={"Enter your 10 digit mobile number"}
                                onChange={(e) => {
                                    onValueChangeHandler('mobile', e.target.value)
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className={nameMobile}>
                    <Box>
                        <Box className={inputBox}>
                            <Typography variant={'body1'}>
                                My enquiry
                            </Typography>
                        </Box>
                        <Box>
                            <textarea
                                name=""
                                cols="100"
                                rows="5"
                                className={textarea}
                                onChange={(e) => {
                                    onValueChangeHandler('enquiry', e.target.value)
                                }}
                            />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Button
                        variant={"contained"}
                        color={"primary"}
                        className={button}
                        disabled={submit || !(form.name && form.mobile && form.occupation && form.enquiry)}
                        onClick={(e) => {
                            writeUserDataToFirebase()
                        }}
                    >
                        {loading ? <Spinner className={spinner}/> :
                            (submit ? "Thank you !" : "Submit")}
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default withStyles(useStyles, {withTheme: true})(ContactUsForm);