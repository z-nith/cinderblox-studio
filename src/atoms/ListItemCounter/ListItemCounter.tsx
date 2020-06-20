import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const ListItemCounter = (props: ListItemCounterPropTypes) => {
    const { count } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.circleContainer}>
                <Typography variant={'h5'} color={'textPrimary'}>
                    {count}
                </Typography>
            </div>
        </div>
    );
};

export type ListItemCounterPropTypes = {
    count: number;
};

export default ListItemCounter;
