import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        height: '56px',
        borderRadius: '28px',
        padding: theme.spacing(1, 3),
    },
    buttonLabel: {
        fontFamily: 'Montserrat',
        fontWeight: 600,
        textTransform: 'none',
    },
    containedPrimary: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
            textDecoration: 'none',
        },
    },
    containedSecondary: {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.custom.greyDark,
        '&:hover': {
            backgroundColor: theme.palette.custom.greyDarker,
            textDecoration: 'none',
        },
    },
    addRightPadding: {
        paddingRight: theme.spacing(2),
    },

    // glow effect for dark mode
    addPrimaryGlow: {
        boxShadow: '0px 2px 16px 0px rgba(217,48,79,0.50)',
    },
    addSecondaryGlow: {
        boxShadow: '0px 2px 16px 0px rgba(44,146,205,0.50)',
    },
});

export default makeStyles(styles);
