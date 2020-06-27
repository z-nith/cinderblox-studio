import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    container: {
        padding: theme.spacing(2),
        textDecoration: 'none',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        },
        '&:active': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    listItemText: {
        color: theme.palette.text.primary,
    },
});

export default makeStyles(styles);
