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
        color: theme.palette.custom.typographyColors.secondaryLight,
        '&:hover': {
            color: theme.palette.primary.main,
        },
    },
    'naked-link': {
        textDecoration: 'underline',
    },
});

export default makeStyles(styles);
