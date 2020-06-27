import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        marginTop: theme.mixins.toolbar.minHeight,
        display: 'flex',
        height: '100vh',
        width: '100vw',
        background:
            'linear-gradient(0deg, rgba(1,130,195,1) 0%, rgba(44,146,205,1)  100%)',
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
