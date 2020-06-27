import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { FooterLinkGroup } from 'molecules';
import { FooterLinkGroupPropTypes } from 'molecules/FooterLinkGroup/FooterLinkGroup';
import { NavigationLink } from 'types/navigation';
import { mockNextUseRouter } from '../mocks';

describe(`FooterLinkGroup`, () => {
    mockNextUseRouter({
        route: '/test',
        pathname: '/test',
        query: '',
        asPath: `/test`,
    });

    const FooterLinkGroupWithTheme = (props: FooterLinkGroupPropTypes) => (
        <ThemeProvider theme={theme}>
            <FooterLinkGroup {...props} />
        </ThemeProvider>
    );

    const mockLink: NavigationLink = {
        href: '/',
        as: '/',
        external: false,
        displayText: 'Navigate to Home',
    };

    const mockExternalLink: NavigationLink = {
        href: 'https://google.com/',
        external: true,
        displayText: 'Navigate to google',
    };

    it(`should group links render without error`, () => {
        const wrapper = mount(
            <FooterLinkGroupWithTheme
                groupHeader={'Link'}
                links={[mockLink, mockExternalLink]}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
