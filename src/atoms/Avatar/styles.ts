import { Theme, makeStyles } from '@material-ui/core';

const styles: any = (theme: Theme | any) => ({
    root: {
        borderRadius: '50%',
    },
    small: {
        height: '16px',
        width: '16px',
    },
    medium: {
        height: '24px',
        width: '24px',
    },
    large: {
        height: '32px',
        width: '32px',
    },
});

export default makeStyles(styles);
