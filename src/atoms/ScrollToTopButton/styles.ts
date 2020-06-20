import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
});

export default makeStyles(styles);
