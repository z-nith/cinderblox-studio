import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        padding: theme.spacing(4, 0, 2, 0),
        minHeight: '300px',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    gridContainer: {
        margin: theme.spacing(0, 2),
    },
    developerInfoContainer: {
        paddingBottom: theme.spacing(2),

        [theme.breakpoints.up('md')]: {
            paddingBottom: 0,
        },
    },
    linkGroupItemContainer: {
        padding: theme.spacing(2, 0),
        [theme.breakpoints.up('md')]: {
            padding: 0,
        },
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    title: {
        textDecoration: 'none',
    },
    copyrightContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
});

export default makeStyles(styles);
