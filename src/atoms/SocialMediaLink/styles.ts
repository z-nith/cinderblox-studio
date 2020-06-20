import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        backgroundColor: theme.palette.custom.black40,
        padding: theme.spacing(1),
        '&:hover': {
            backgroundColor: theme.palette.custom.charcoal,
            color: theme.palette.common.white,
        },
    },

    // Size Variant
    large: {
        fontSize: theme.typography.pxToRem(40),
    },
    medium: {
        fontSize: theme.typography.pxToRem(32),
    },
    small: {
        fontSize: theme.typography.pxToRem(18),
    },
});

export default makeStyles(styles);
