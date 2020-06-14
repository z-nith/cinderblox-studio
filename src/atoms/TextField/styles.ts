import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        backgroundColor: theme.palette.custom.charcoal,
        borderRadius: theme.spacing(1),
    },
    outlined: {
        borderRadius: theme.spacing(1),
    },
});

export default makeStyles(styles);
