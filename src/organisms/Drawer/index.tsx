import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { alternateDarkTheme } from 'theme';
import Drawer, { DrawerPropTypes } from './Drawer';

const Index = (props: DrawerPropTypes) => {
    return (
        <ThemeProvider theme={alternateDarkTheme}>
            <Drawer {...props} />
        </ThemeProvider>
    );
};

export default Index;
