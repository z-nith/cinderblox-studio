import { createMuiTheme, Theme, responsiveFontSizes } from '@material-ui/core';
import { lightPalette, darkPalette } from './palettes';
import commonOverrides from './overrides';
import typography from './typography';

const lightTheme: Theme = createMuiTheme({
    palette: {
        type: 'light',
        ...lightPalette,
    },
    typography: typography,
    overrides: commonOverrides,
});

const darkTheme: Theme = createMuiTheme({
    palette: {
        type: 'dark',
        ...darkPalette,
    },
    typography: typography,
    overrides: commonOverrides,
});

const defaultLightTheme = responsiveFontSizes(lightTheme);
const alternateDarkTheme = responsiveFontSizes(darkTheme);

export { defaultLightTheme, alternateDarkTheme };
export default defaultLightTheme;
