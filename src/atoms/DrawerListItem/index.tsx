import React from 'react';
import DrawerListItem, { DrawerListItemPropTypes } from './DrawerListItem';
import { ThemeProvider } from '@material-ui/core';
import { alternateDarkTheme } from 'theme';

const Index = (props: DrawerListItemPropTypes) => {
    return (
        <ThemeProvider theme={alternateDarkTheme}>
            <DrawerListItem {...props} />
        </ThemeProvider>
    );
};

export default Index;
