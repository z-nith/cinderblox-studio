import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    /********
     * BASE *
     ********/
    root: {
        maxWidth: theme.breakpoints.values.lg,
        margin: '0px auto',
        width: '100%',
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
        marginLeft: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            marginLeft: theme.spacing(1),
        },
        [theme.breakpoints.up('lg')]: {
            marginLeft: 0,
        },
    },
    toolbarCenter: {
        flex: 1,
        justifyContent: 'center',
    },
    toolbarRight: {
        flex: 1,
        justifyContent: 'flex-end',
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(1),
        },
        [theme.breakpoints.up('lg')]: {
            marginRight: 0,
        },
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
        paddingLeft: theme.spacing(2),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default makeStyles(styles);
