import { createMuiTheme, Theme, responsiveFontSizes } from '@material-ui/core';

const theme: Theme = createMuiTheme({
    palette: {
        background: {
            default: '#FFFFFF',
        },
        primary: {
            main: '#DB1A3F',
            light: '#E15F79',
            dark: '#A81432',
        },
        secondary: {
            main: '#2C92CD',
            light: '#4FBEFF',
            dark: '#365775',
        },
        common: {
            black: '#000000',
            white: '#FFFFFF',
        },
        custom: {
            greyDefault: '#EBEEEF',
            greyDark: '#DDE1E4',
            greyLight: '#F9F9FA',
            white75: 'rgba(255, 255, 255, 0.75)',
            white60: 'rgba(255, 255, 255, 0.60)',
            black75: 'rgba(0, 0, 0, 0.75)',
            black60: 'rgba(0, 0, 0, 0.60)',
            charcoal: '#121516',
            charcoalDark: '#0E1214',
            charcoalLight: '#181C1E',
        },
    },
    typography: {
        fontFamily: 'Lato',
    },
    overrides: {
        MuiTypography: {
            h1: {
                fontWeight: 900,
                fontFamily: 'Montserrat',
            },
            h2: {
                fontWeight: 900,
                fontFamily: 'Montserrat',
            },
            h3: {
                fontWeight: 900,
                fontFamily: 'Montserrat',
            },
            h4: {
                fontWeight: 900,
                fontFamily: 'Montserrat',
            },
            h5: {
                fontWeight: 900,
                fontFamily: 'Montserrat',
            },
            h6: {
                fontWeight: 900,
                fontFamily: 'Montserrat',
            },

            subtitle1: {
                fontWeight: 'bold',
            },
            subtitle2: {
                fontWeight: 'bold',
            },
        },
    },
});

export default responsiveFontSizes(theme);
