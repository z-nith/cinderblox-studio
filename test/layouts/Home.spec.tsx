import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { Home } from 'layouts';
import { HomePropTypes } from 'layouts/Home/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
import { mockNextUseRouter } from '../mocks';

describe(`Home`, () => {
    // Mocks Next.js route
    mockNextUseRouter({
        route: '/',
        pathname: '/',
        query: '',
        asPath: `/`,
    });

    const HomeWithTheme = (props: HomePropTypes) => (
        <ThemeProvider theme={theme}>
            <ParallaxProvider>
                <Home {...props} />
            </ParallaxProvider>
        </ThemeProvider>
    );

    it(`should render without error`, () => {
        const wrapper = mount(<HomeWithTheme />);
        expect(wrapper).toMatchSnapshot();
    });
});
