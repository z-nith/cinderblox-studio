import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { LandingHeader } from 'organisms';
import { LandingHeaderPropTypes } from 'organisms/LandingHeader/LandingHeader';
import { ParallaxProvider } from 'react-scroll-parallax';
import { mockNextUseRouter } from '../mocks';

describe(`LandingHeader`, () => {
    mockNextUseRouter({
        route: '/',
        pathname: '/',
        query: '',
        asPath: `/`,
    });

    const LandingHeaderWithTheme = (props: LandingHeaderPropTypes) => (
        <ThemeProvider theme={theme}>
            <ParallaxProvider>
                <LandingHeader {...props} />
            </ParallaxProvider>
        </ThemeProvider>
    );

    it(`should render without error`, () => {
        const wrapper = mount(<LandingHeaderWithTheme />);
        expect(wrapper).toMatchSnapshot();
    });
});
