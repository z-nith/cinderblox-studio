import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    addMarginBottom: {
        paddingBottom: theme.spacing(3),
    },
});

export default makeStyles(styles);
