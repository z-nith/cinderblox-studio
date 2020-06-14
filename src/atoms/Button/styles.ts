import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    buttonLabel: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        textTransform: 'none',
    },
    containedPrimary: {
        backgroundColor: theme.palette.primary.main,
        height: '56px',
        borderRadius: '28px',
        padding: theme.spacing(1, 3),
        color: theme.palette.common.white,
        boxShadow: '0px 5px 0px 0px rgba(0,0,68,.50)',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            transform: 'translate(0px, -4px)',
            boxShadow: '0px 5px 0px 0px rgba(0,0,68,0.80)',
        },
    },
    containedSecondary: {
        backgroundColor: theme.palette.custom.greyDark,
        height: '56px',
        borderRadius: '28px',
        padding: theme.spacing(1, 3),
        color: theme.palette.common.white,
    },
});

export default makeStyles(styles);
