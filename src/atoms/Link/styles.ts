import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    'default-primary-link': {
        color: theme.palette.primary.main,
        textDecoration: 'none',
    },
    'default-blue-link': {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
    },
    'footer-link': {
        color: theme.palette.text.secondary,
        '&:hover': {
            color: theme.palette.primary.main,
        },
        textDecoration: 'none',
    },
    'naked-link': {
        textDecoration: 'underline',
    },
    'appBar-link': {
        color: theme.palette.common.white,
        textDecoration: 'none',
        fontWeight: 'bold',
        '&:hover': {
            textDecoration: 'none',
            color: theme.palette.custom.white60,
        },
    },
    'wrapping-link': {
        textDecoration: 'none',
        margin: 0,
        lineHeight: 'normal',
    },
});

export default makeStyles(styles);
