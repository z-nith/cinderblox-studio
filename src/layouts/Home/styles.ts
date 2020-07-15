import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    addMarginBottom: {
        paddingBottom: theme.spacing(3),
    },
    presentation: {
        height: 'auto',
        width: '100%',
    },
    apiIllustration: {
        paddingRight: theme.spacing(12),
        [theme.breakpoints.down('sm')]: {
            paddingRight: theme.spacing(3),
        },
    },
    textContentContainer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: theme.spacing(0, 1),
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            paddingBottom: theme.spacing(8),
        },
    },
    textDescriptionContainer: {
        paddingTop: theme.spacing(3),
    },
    landingSectionCTAButtonContainer: {
        paddingTop: theme.spacing(4),
    },
});

export default makeStyles(styles);
