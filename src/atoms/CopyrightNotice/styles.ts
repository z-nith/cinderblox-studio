import { Theme, makeStyles, createStyles } from '@material-ui/core';

const styles: any = (theme: Theme) =>
    createStyles({
        copyrightText: {
            color: theme.palette.custom.white60,
            fontSize: theme.typography.pxToRem(10),
        },
    });

export default makeStyles(styles);
