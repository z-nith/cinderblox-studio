import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { Footer } from 'organisms';
import { FooterPropTypes } from 'organisms/Footer/Footer';
import { mockNextUseRouter } from '../mocks';

describe(`Footer`, () => {
    mockNextUseRouter({
        route: '/',
        pathname: '/',
        query: '',
        asPath: `/`,
    });

    const FooterWithTheme = (props: FooterPropTypes) => (
        <ThemeProvider theme={theme}>
            <Footer {...props} />
        </ThemeProvider>
    );

    it(`should render without error`, () => {
        const wrapper = mount(<FooterWithTheme />);
        expect(wrapper).toMatchSnapshot();
    });
});
