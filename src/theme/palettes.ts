const basePalette = {
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
        greyDarker: '#CDD4D8',
        greyDark: '#DDE1E4',
        greyLight: '#F9F9FA',
        white75: 'rgba(255, 255, 255, 0.75)',
        white60: 'rgba(255, 255, 255, 0.60)',
        black75: 'rgba(0, 0, 0, 0.75)',
        black60: 'rgba(0, 0, 0, 0.60)',
        black40: 'rgba(0, 0, 0, 0.40)',
        charcoal: '#121516',
        charcoalDark: '#0E1214',
        charcoalLight: '#181C1E',
    },
};

const lightPalette = {
    ...basePalette,
    background: {
        default: '#FFFFFF',
        paper: '#FFFFFF',
    },

    text: {
        primary: 'rgba(4, 28, 41, 1)',
        secondary: 'rgba(4, 28, 41, 0.56)',
        disabled: ' rgba(4, 28, 41, 0.75)',
        hint: ' rgba(4, 28, 41, 0.75)',
        divider: '#DDE1E4',
    },
};

const darkPalette = {
    ...basePalette,
    background: {
        default: '#0E1214',
        paper: '#181C1E',
    },
    text: {
        primary: 'rgba(255, 255, 255, 0.95)',
        secondary: 'rgba(255, 255, 255, 0.70)',
        disabled: 'rgba(255, 255, 255, 0.55)',
        hint: ' rgba(255, 255, 255, 0.55)',
        divider: 'rgba(255, 255, 255, 0.02)',
    },
};

export { lightPalette, darkPalette };
