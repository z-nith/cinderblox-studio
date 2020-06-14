import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { SocialMediaLink } from 'atoms';
import { SocialMediaLinkPropTypes } from 'atoms/SocialMediaLink/SocialMediaLink';

describe(`SocialMediaLink`, () => {
    const SocialMediaLinkWithTheme = (props: SocialMediaLinkPropTypes) => (
        <ThemeProvider theme={theme}>
            <SocialMediaLink {...props} />
        </ThemeProvider>
    );

    it(`should render website without error`, () => {
        const wrapper = mount(
            <SocialMediaLinkWithTheme variant={'website'} href={'https://google.com'} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render github without error`, () => {
        const wrapper = mount(
            <SocialMediaLinkWithTheme variant={'github'} href={'https://google.com'} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render linkedin without error`, () => {
        const wrapper = mount(
            <SocialMediaLinkWithTheme variant={'linkedin'} href={'https://google.com'} />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
