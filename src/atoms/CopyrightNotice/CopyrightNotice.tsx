import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const CopyrightNotice = (props: CopyrightNoticePropTypes) => {
    const classes = useStyles();

    return (
        <Typography className={classes.copyrightText}>
            © CinderBlox 2020. All rights reserved.
        </Typography>
    );
};

export type CopyrightNoticePropTypes = {};

export default CopyrightNotice;
