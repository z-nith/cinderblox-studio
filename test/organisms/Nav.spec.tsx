import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { Nav } from 'organisms';
import { NavPropTypes } from 'organisms/Nav/Nav';

describe(`Nav`, () => {
    const NavWithTheme = (props: NavPropTypes) => (
        <ThemeProvider theme={theme}>
            <Nav {...props} />
        </ThemeProvider>
    );
    it(`should render Nav without error`, () => {
        const wrapper = mount(<NavWithTheme />);
        expect(wrapper).toMatchSnapshot();
    });
});
