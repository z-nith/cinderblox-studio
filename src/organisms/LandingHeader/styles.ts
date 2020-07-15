import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        display: 'flex',
        minHeight: '100vh',
        width: '100vw',
        background:
            'linear-gradient(0deg, rgba(1,130,195,1) 0%, rgba(44,146,205,1)  90%)',
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },

    contentContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
    },
    ctaOuterContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ctaContainer: {
        paddingTop: '40%',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '25%',
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: '15%',
        },
        [theme.breakpoints.up('lg')]: {
            paddingTop: '10%',
        },
        [theme.breakpoints.up('xl')]: {
            paddingTop: '8%',
        },
    },
    buttonGroupContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: theme.spacing(6),
    },
    appFrameContainer: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        bottom: '-2%',
        padding: theme.spacing(0, 4),
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 2),
        },
    },
    appFrame: {
        height: 'auto',
        width: '100%',
        maxWidth: '1280px',
    },
    cloudLeft: {
        position: 'absolute',
        height: 'auto',
        bottom: '40%',
        width: '180px',
        opacity: '0.8',
        left: '-60px',
        [theme.breakpoints.up(1000)]: {
            width: '300px',
            bottom: '44%',
        },
        [theme.breakpoints.up(1760)]: {
            width: '360px',
            bottom: '44%',
            left: '5%',
        },
    },
    cloudTopRight: {
        width: '150px',
        height: 'auto',
        position: 'absolute',
        bottom: '55%',
        right: '-75px',
        opacity: '0.6',
        [theme.breakpoints.up(1200)]: {
            right: '2%',
        },
        [theme.breakpoints.up(1800)]: {
            right: '10%',
        },
    },
    cloudBottomRight: {
        height: 'auto',
        position: 'absolute',
        bottom: '30%',
        width: '300px',
        right: '-156px',
        [theme.breakpoints.up(1000)]: {
            right: '-5%',
            width: '360px',
        },
        [theme.breakpoints.up(1800)]: {
            width: '420px',
            right: '2%',
        },
    },
    headerText: {
        fontSize: theme.typography.pxToRem(40),
        [theme.breakpoints.up(330)]: {
            fontSize: theme.typography.pxToRem(50),
        },
        [theme.breakpoints.up(600)]: {
            fontSize: theme.typography.pxToRem(64),
        },
    },
});

export default makeStyles(styles);
