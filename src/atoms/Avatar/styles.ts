import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    small: {
        height: theme.spacing(2),
        width: theme.spacing(2),
    },
    medium: {
        height: theme.spacing(3),
        width: theme.spacing(3),
    },
    large: {
        height: theme.spacing(4),
        width: theme.spacing(4),
    },
});

export default makeStyles(styles);
