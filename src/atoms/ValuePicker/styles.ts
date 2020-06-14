import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        backgroundColor: theme.palette.custom.charcoal,
        borderRadius: theme.spacing(1),
    },
    menu: {
        backgroundColor: theme.palette.custom.charcoalLight,
    },
    menuItem: {
        '&:hover': {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.custom.black60,
        },
    },
});

export default makeStyles(styles);
