import React, { useState } from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import { Typography, MenuItem, ThemeProvider } from '@material-ui/core';
import { Button, SocialMediaLink, Link, TextField, ValuePicker } from 'atoms';
import { GitHub } from 'react-feather';
import { alternateDarkTheme } from 'theme';

const CQA = (props: CQAPropTypes) => {
    const classes = useStyles();

    const [selection, setSelection] = useState('Hex');

    const colorFormats = ['Hex', 'RGB', 'HSL', 'HSB', 'CMYK'];

    return (
        <div className={classes.root}>
            <ThemeProvider theme={alternateDarkTheme}>
                <Typography variant={'h1'} className={classes.test}>
                    Dark Theme hello world
                </Typography>
            </ThemeProvider>
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
                <Link variant={'default-blue'} href={'/app'}>
                    Click here to go to app
                </Link>
                <ValuePicker
                    pickerValues={colorFormats}
                    //label="Format"
                    value={selection}
                    onChange={(newValue) => setSelection(newValue.target.value)}
                />
            </div>
        </div>
    );
};

export type CQAPropTypes = {};

export default CQA;
