import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        maxWidth: theme.breakpoints.values.lg,
        margin: '0 auto',
        width: '100%',
    },
});

export default makeStyles(styles);
