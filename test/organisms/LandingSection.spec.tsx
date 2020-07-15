import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider, Typography } from '@material-ui/core';
import theme from 'theme';
import { LandingSection } from 'organisms';
import { LandingSectionPropTypes } from 'organisms/LandingSection/LandingSection';
import { mockNextUseRouter } from '../mocks';

describe(`LandingSection`, () => {
    // Mocks Next.js route
    mockNextUseRouter({
        route: '/',
        pathname: '/',
        query: '',
        asPath: `/`,
    });

    const LandingSectionWithTheme = (props: LandingSectionPropTypes) => (
        <ThemeProvider theme={theme}>
            <LandingSection {...props} />
        </ThemeProvider>
    );

    it(`should render without Landing Section with default background without error`, () => {
        const wrapper = mount(
            <LandingSectionWithTheme
                backgroundColor={'default'}
                flexRowDirection={'row-reverse'}
                rightChild={<Typography>Left Child</Typography>}
                rightGridItemProps={{
                    xs: 12,
                    md: 7,
                }}
                leftGridItemProps={{
                    xs: 12,
                    md: 5,
                }}
                leftChild={<Typography>Hello World!</Typography>}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render without Landing Section with paper background without error`, () => {
        const wrapper = mount(
            <LandingSectionWithTheme
                backgroundColor={'paper'}
                flexRowDirection={'row'}
                rightChild={<Typography>Hey</Typography>}
                rightGridItemProps={{
                    xs: 12,
                    md: 7,
                }}
                leftGridItemProps={{
                    xs: 12,
                    md: 5,
                }}
                leftChild={<Typography>Hello World!</Typography>}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
