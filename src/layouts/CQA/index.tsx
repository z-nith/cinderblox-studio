import React from 'react';
import clsx from 'clsx';
import CQA from './CQA';
import { ThemeProvider } from '@material-ui/core';
import { alternateDarkTheme } from 'theme';

const Index = (props: CQAIndexPropTypes) => {
    return (
        <ThemeProvider theme={alternateDarkTheme}>
            <CQA />
        </ThemeProvider>
    );
};

export type CQAIndexPropTypes = {};

export default Index;
