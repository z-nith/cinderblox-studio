import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { Link } from 'atoms';
import { LinkPropTypes } from 'atoms/Link/Link';
import { mockNextUseRouter } from '../mocks';

describe(`Link`, () => {
    // Mocks Next.js route
    mockNextUseRouter({
        route: '/test',
        pathname: '/test',
        query: '',
        asPath: `/test`,
    });

    const LinkWithTheme = (props: LinkPropTypes) => (
        <ThemeProvider theme={theme}>
            <Link {...props} />
        </ThemeProvider>
    );

    it(`should render card link variant without error`, () => {
        const wrapper = mount(
            <LinkWithTheme href={'/'} as={'/'} variant={'default-blue'}>
                Title Link
            </LinkWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render naked link variant without error`, () => {
        const wrapper = mount(
            <LinkWithTheme
                href={'https://google.com'}
                variant={'naked'}
                external
                target={'_blank'}
            >
                Naked Link
            </LinkWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render footer link variant without error`, () => {
        const wrapper = mount(
            <LinkWithTheme href={'https://google.com'} variant={'footer'} external>
                Footer Link
            </LinkWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render wrapper external link variant without error`, () => {
        const wrapper = mount(
            <LinkWithTheme href={'https://google.com'} variant={'wrapper'} external>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'black',
                    }}
                >
                    I'm wrapped component that's a link
                </div>
            </LinkWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render wrapper link variant without error`, () => {
        const wrapper = mount(
            <LinkWithTheme href={'/test'} as={'/test'} variant={'wrapper'}>
                <div
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: 'black',
                    }}
                >
                    I'm wrapped component that's a link
                </div>
            </LinkWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
