import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    developerText: {
        paddingLeft: theme.spacing(1),
        color: theme.palette.text.primary,
    },
});

export default makeStyles(styles);
