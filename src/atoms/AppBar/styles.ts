import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    /********
     * BASE *
     ********/
    root: {
        margin: theme.spacing(0, 22),
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0, 3),
        },
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(0, 1),
        },
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    flexRowBase: {
        display: 'flex',
        flexDirection: 'row',

        alignItems: 'center',
    },
    rowSpaceBetween: {
        justifyContent: 'space-between',
    },

    /****************************
     * APPBAR CONTENT CONTAINER *
     ****************************/
    toolbarLeft: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    toolbarCenter: {
        flex: 1,
        justifyContent: 'center',
    },
    toolbarRight: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    /***********
     * CONTENT *
     ***********/
    title: {
        color: theme.palette.common.white,
        fontFamily: 'Montserrat',
        fontWeight: 900,
        textDecoration: 'none',
    },
    navlinkContainer: {
        padding: theme.spacing(0, 2),
    },
    socialLinkContainer: {
        padding: theme.spacing(0, 1),
    },
});

export default makeStyles(styles);
