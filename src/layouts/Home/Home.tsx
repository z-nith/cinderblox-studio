import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Typography } from '@material-ui/core';
import { Button } from 'atoms';
import { GitHub } from 'react-feather';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h1'}>Hello world!</Typography>
            <div
                style={{
                    maxWidth: '300px',
                }}
            >
                <Button
                    variant={'contained'}
                    color={'primary'}
                    onClick={() => {}}
                    startIcon={<GitHub color="white" size={18} />}
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
};

export type HomePropTypes = {};

export default Home;
