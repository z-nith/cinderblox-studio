import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { ContentMarginContainer } from 'atoms';
import { ContentMarginContainerPropTypes } from 'atoms/ContentMarginContainer/ContentMarginContainer';

describe(`ContentMarginContainer`, () => {
    const ContentMarginContainerWithTheme = (props: ContentMarginContainerPropTypes) => (
        <ThemeProvider theme={theme}>
            <ContentMarginContainer {...props} />
        </ThemeProvider>
    );

    it(`should render without error`, () => {
        const wrapper = mount(
            <ContentMarginContainerWithTheme>
                <div />
            </ContentMarginContainerWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
