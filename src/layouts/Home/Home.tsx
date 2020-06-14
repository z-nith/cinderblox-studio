import React, { useState } from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Typography, MenuItem } from '@material-ui/core';
import { Button, SocialMediaLink, Link, TextField, ValuePicker } from 'atoms';
import { GitHub } from 'react-feather';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant={'h1'}>Light theme</Typography>
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
                <SocialMediaLink
                    variant={'github'}
                    color={'dark'}
                    href={'https://github.com/'}
                />
                <Link variant={'default-blue'} href={'/color-studio'}>
                    Click here to go to app
                </Link>
            </div>
        </div>
    );
};

export type HomePropTypes = {};

export default Home;
