import React, { useState } from 'react';
import { useTheme } from '@material-ui/core';
import { Button, Link, SocialMediaLink, Typography, ValuePicker } from 'atoms';
import { GitHub } from 'react-feather';
import useStyles from './styles';

const CQA = (props: CQAPropTypes) => {
    const classes = useStyles();

    const [selection, setSelection] = useState('Hex');

    const colorFormats = ['Hex', 'RGB', 'HSL', 'HSB', 'CMYK'];

    const theme = useTheme();

    return (
        <div className={classes.root}>
            <Typography variant={'h1'} color={'textPrimary'}>
                Dark Theme hello world
            </Typography>
            <Typography variant={'body1'} color={'textSecondary'}>
                Dark Theme hello world
            </Typography>
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
