---
to: test/organisms/<%=name%>.spec.tsx
---
import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme/customTheme';
import { <%= h.changeCase.ucFirst(name) %> } from 'organisms';
import { <%= h.changeCase.ucFirst(name) %>PropTypes } from 'organisms/<%= h.changeCase.ucFirst(name) %>/<%= h.changeCase.ucFirst(name) %>';

describe(`<%= h.changeCase.ucFirst(name) %>`, () => {
    const <%= h.changeCase.ucFirst(name) %>WithTheme = (props: <%= h.changeCase.ucFirst(name) %>PropTypes) => (
        <ThemeProvider theme={theme}>
            <<%= h.changeCase.ucFirst(name) %> {...props} />
        </ThemeProvider>
    );

    // TODO tests here
    it(`should render without error`, () => {
        const wrapper = mount(
            <<%= h.changeCase.ucFirst(name) %>WithTheme/>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
