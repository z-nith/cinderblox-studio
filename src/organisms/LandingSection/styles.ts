import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        padding: theme.spacing(14, 0),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(7, 0, 4, 0),
        },
    },
    defaultBackground: {
        backgroundColor: theme.palette.background.default,
    },
    paperBackground: {
        backgroundColor: theme.palette.background.paper,
    },
    defaultFlexRow: {
        flexDirection: 'row',
    },
    reverseFlexRow: {
        flexDirection: 'row-reverse',
    },
});

export default makeStyles(styles);
