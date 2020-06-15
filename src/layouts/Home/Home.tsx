import React, { useState } from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Typography, MenuItem, useTheme } from '@material-ui/core';
import { Button, SocialMediaLink, Link, TextField, ValuePicker } from 'atoms';
import { GitHub, ExternalLink } from 'react-feather';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    const theme = useTheme();

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
                <Button
                    variant={'contained'}
                    color={'secondary'}
                    onClick={() => {}}
                    startIcon={
                        <ExternalLink color={theme.palette.text.primary} size={18} />
                    }
                >
                    Learn More
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
