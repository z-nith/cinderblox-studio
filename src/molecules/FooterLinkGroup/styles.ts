import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    linkContainer: {
        padding: theme.spacing(1, 0),
    },
});

export default makeStyles(styles);
