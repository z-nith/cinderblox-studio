import React, { useState } from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Typography, MenuItem, useTheme } from '@material-ui/core';
import {
    Button,
    SocialMediaLink,
    Link,
    TextField,
    ValuePicker,
    Tooltip,
    Avatar,
    AppBar,
    ScrollToTopButton,
} from 'atoms';
import { GitHub, ExternalLink } from 'react-feather';
//import CloudLarge from '../../../public/img/large_cloud.svg';

const Home = (props: HomePropTypes) => {
    const classes = useStyles();

    const theme = useTheme();

    return (
        <React.Fragment>
            <AppBar />
            <div className={classes.root}>
                <div
                    style={{
                        paddingTop: '300px',
                    }}
                >
                    {/* <CloudLarge className={classes.testSvg} /> */}
                    <Typography variant={'h1'}>Light theme</Typography>
                    <div
                        style={{
                            minHeight: '1400px',
                            width: '100%',
                        }}
                    />
                </div>
            </div>
            <ScrollToTopButton {...props} />
        </React.Fragment>
    );
};

export type HomePropTypes = {};

export default Home;
