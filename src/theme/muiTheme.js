import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';

const theme = createMuiTheme({
    shadows: ["none"],
    palette: {
        type: "light",
        primary: {
            light: "#53cb49",
            main: "#009914",
            dark: "#006900",
            contrastText: "#ffffff"
        },
        secondary: {
            light: "#fff0cc",
            main: "#ffb200",
            dark: "#c68300",
        },
    },

    typography: {
        htmlFontSize: 16,
        // pxToRem: ()=>{},
        // round: ()=>{},
        fontFamily: `"Montserrat", sans-serif`,
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        h1: {
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            fontWeight: "bold",
            fontSize: "3.875rem",
            lineHeight: 1.167,
            letterSpacing: "-0.01562em",
        },
        h2: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: "bold",
            fontSize: "3rem",
            lineHeight: 1.2,
            letterSpacing: "-0.00833em",
        },
        h3: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: "bold",
            fontSize: "2.375rem",
            lineHeight: 1.167,
            letterSpacing: "0em",
        },
        h4: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 400,
            fontSize: "2.25rem",
            lineHeight: 1.235,
            letterSpacing: "0.00735em",
        },
        h5: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 600,
            fontSize: "1.5rem",
            lineHeight: 1.334,
            letterSpacing: "0em",
        },
        h6: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 300,
            fontSize: "1.5rem",
            lineHeight: 1.6,
            letterSpacing: "0.0075em",
        },
        subtitle1: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 400,
            fontSize: "1.375rem",
            lineHeight: 1.75,
            letterSpacing: "0.00938em",
        },
        subtitle2: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 500,
            fontSize: "1.25rem",
            lineHeight: 1.57,
            letterSpacing: "0.00714em",
        },
        body1: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 600,
            fontSize: "1rem",
            lineHeight: 1.5,
            letterSpacing: "0.00938em",
        },
        body2: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: 1.43,
            letterSpacing: "0.01071em",
        },
        caption: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 400,
            fontSize: "0.875rem",
            lineHeight: 1.66,
            letterSpacing: "0.03333em",
        },
        overline: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 600,
            fontSize: "0.75rem",
            lineHeight: 2.66,
            letterSpacing: "0.09375em",
            textTransform: "uppercase",
        },
        button: {
            fontFamily: `"Montserrat", sans-serif`,
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: 1.75,
            letterSpacing: "0.125em",
            textTransform: "uppercase",
        },


    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1430,
            xl: 1600,
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: "8px",
                padding: "8px 16px",
                fontSize: "14px",
                "&disabled": {
                    backgroundColor: "#ff8984",
                },
            },
        },
        MuiInput: {
            formControl: {
                fontSize: "16px",
                fontWeight: "500",
            },
        },
        MuiChip: {
            root: {
                backgroundColor: '#ffffff',
                fontSize: "16px",
                fontWeight: 500,
                '&:hover:not($disabled):not($focused):not($error)': {
                    backgroundColor: 'rgba(255, 88, 93, .2)',
                    '@media (hover: none)': {
                        backgroundColor: 'rgba(255, 88, 93, .2)',
                    },
                },
                '&$focused': {
                    backgroundColor: 'rgba(255, 88, 93, .2)',
                },
            },
        },
        MuiFormLabel: {
            root: {
                fontSize: '18px',
                '&$focused': {
                    color: '#ff585d',
                    backgroundColor: '#ffffff',
                    fontSize: '18px',
                }
            }
        },
        MuiFormHelperText: {
            root: {
                color: '#ff585d',
            }
        },
        MuiTimelineItem: {
            missingOppositeContent: {
                "&:MuiTimelineConnector": {
                    display: "none !important"
                }
            }
        }
    },

    MuiDialogContent: {
        root: {
            firstChild: {
                padding: "0px",
            },
        },
    },
});


export default theme;
