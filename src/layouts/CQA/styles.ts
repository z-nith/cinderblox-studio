import { Theme, makeStyles } from '@material-ui/core';

//TODO: Override global typography component to explicitly use non-inhertiance. ITs only the only way the them provider will work
const styles: any = (theme: Theme | any) => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.background.default,
        },
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        weidth: '100vw',
        backgroundColor: theme.palette.background.default,
    },
});

export default makeStyles(styles);
