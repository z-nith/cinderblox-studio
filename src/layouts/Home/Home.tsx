import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Typography } from '@material-ui/core';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h1'}>Hello world!</Typography>
        </div>
    );
};

export type HomePropTypes = {};

export default Home;
