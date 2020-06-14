import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        color: theme.palette.custom.white16,
    },

    // Size Variant
    large: {
        fontSize: theme.typography.pxToRem(40),
    },
    medium: {
        fontSize: theme.typography.pxToRem(32),
    },
    small: {
        fontSize: theme.typography.pxToRem(24),
    },
});

export default makeStyles(styles);
