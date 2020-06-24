import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.secondary.main,
    },
    testSvg: {
        height: 'auto',
        width: '100%',
    },
    headerText: {
        color: theme.palette.common.white,
    },
    addMarginBottom: {
        paddingBottom: theme.spacing(3),
    },
});

export default makeStyles(styles);
