import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        display: 'flex',
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.secondary.main,
    },
    testSvg: {
        height: '100px',
        width: 'auto',
    },
});

export default makeStyles(styles);
