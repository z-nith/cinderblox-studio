import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    modalProps: {
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        backdropFilter: 'blur(50px)',
    },
    paper: {
        minWidth: '300px',
        backgroundColor: theme.palette.custom.charcoalDark,
    },
    header: {
        padding: theme.spacing(3, 2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    closeButton: {
        backgroundColor: 'black',
    },
    drawerBottom: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        float: 'bottom',
    },
    developerInfoContainer: {
        width: '100%',
        minHeight: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    copyrightNoticeContainer: {
        width: '100%',
        backgroundColor: theme.palette.custom.black40,
        minHeight: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dividerContainer: {
        padding: theme.spacing(3, 0),
    },
});

export default makeStyles(styles);
