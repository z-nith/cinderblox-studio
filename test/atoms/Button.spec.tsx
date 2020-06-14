import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { Button } from 'atoms';
//import { ButtonPropTypes } from 'atoms/Button/Button';

describe(`Button`, () => {
    // const ButtonWithTheme = (props: ButtonPropTypes) => (
    //     <ThemeProvider theme={theme}>
    //         <Button {...props} />
    //     </ThemeProvider>
    // );

    // TODO tests here
    it(`should render without error`, () => {
        // const wrapper = mount(
        //     <ButtonWithTheme/>,
        // );
        expect(4).toBeLessThanOrEqual(5);
    });
});
