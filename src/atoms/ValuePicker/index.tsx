import React from 'react';
import { TextFieldProps, ThemeProvider } from '@material-ui/core';
import ValuePicker from './ValuePicker';
import { alternateDarkTheme } from 'theme';

//TODO: Remove theme provider once we can properly override at the page level
const DarkOverride = (props: ValuePickerPropTypes) => {
    return (
        <ThemeProvider theme={alternateDarkTheme}>
            <ValuePicker {...props} />
        </ThemeProvider>
    );
};

export type ValuePickerPropTypes = TextFieldProps & {
    pickerValues: string[];
};

export default DarkOverride;
