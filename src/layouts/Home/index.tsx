import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import Home from './Home';

const Index = (props: HomeIndexPropTypes) => {
    const classes = useStyles();

    return <Home />;
};

export type HomeIndexPropTypes = {};

export default Index;
