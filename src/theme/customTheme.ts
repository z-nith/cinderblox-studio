import { createMuiTheme, Theme, responsiveFontSizes } from '@material-ui/core/styles';
import { palette } from './palette';

/**
 * This file allows Material UI to inject the overall theme for this project
 * via the <ThemeProvider /> context.
 *
 * https://material-ui.com/customization/themes/
 *
 * You can provide additional config and overrides by defining tem in their own file under
 *  the theme/ directory and destructuring them here
 */
const theme: Theme = createMuiTheme({
    palette,
});

export default responsiveFontSizes(theme);
