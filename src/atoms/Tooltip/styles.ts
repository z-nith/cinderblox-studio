import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    tooltip: {
        backgroundColor: theme.palette.custom.charcoalDark,
        color: theme.palette.common.white,
    },
    arrow: {
        color: theme.palette.custom.charcoalDark,
    },
});

export default makeStyles(styles);
