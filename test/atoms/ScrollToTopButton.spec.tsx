import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { ScrollToTopButton } from 'atoms';
import { ScrollToTopButtonPropTypes } from 'atoms/ScrollToTopButton/ScrollToTopButton';

describe(`ScrollToTopButton`, () => {
    const ScrollToTopButtonWithTheme = (props: ScrollToTopButtonPropTypes) => (
        <ThemeProvider theme={theme}>
            <ScrollToTopButton {...props} />
        </ThemeProvider>
    );

    it(`should render without error`, () => {
        const wrapper = mount(<ScrollToTopButtonWithTheme />);
        expect(wrapper).toMatchSnapshot();
    });
});
