import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        paddingRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(5),
        },
    },
    circleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        [theme.breakpoints.up('md')]: {
            width: '64px',
            height: '64px',
        },
        backgroundColor: theme.palette.custom.greyDark,
    },
});

export default makeStyles(styles);
