import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        weidth: '100vw',
        backgroundColor: 'white',
    },
});

export default makeStyles(styles);
