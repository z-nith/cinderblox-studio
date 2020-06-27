import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    title: {
        fontFamily: 'Montserrat',
        fontWeight: 900,
        textDecoration: 'none',
    },
    whiteLogo: {
        color: theme.palette.common.white,
    },
    primaryLogo: {
        color: theme.palette.primary.main,
    },
    secondaryLogo: {
        color: theme.palette.secondary.main,
    },
    blackLogo: {
        color: theme.palette.common.black,
    },
});

export default makeStyles(styles);
