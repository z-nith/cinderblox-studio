import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => {
    return {
        colorTextPrimary: {
            color: theme.palette.text.primary,
        },
        colorTextSecondary: {
            color: theme.palette.text.secondary,
        },
    };
};

export default makeStyles(styles);
