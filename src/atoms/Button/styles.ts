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
        //boxShadow: '0px 10px  rgba(0,0,0,0.80)',
        //transform: 'translate(0px, -4px)',
        // '&:active': {
        //     transform: 'translate(0px, 10px)',
        // },
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            //boxShadow: '0px 10px rgba(0,0,0,0.80)',
        },
    },
    containedSecondary: {
        backgroundColor: theme.palette.custom.greyDark,
        height: '56px',
        borderRadius: '28px',
        padding: theme.spacing(1, 3),
        color: theme.palette.text.primary,
        '&:hover': {
            backgroundColor: theme.palette.custom.greyDarker,
        },
    },
    addRightPadding: {
        paddingRight: theme.spacing(2),
    },
});

export default makeStyles(styles);
