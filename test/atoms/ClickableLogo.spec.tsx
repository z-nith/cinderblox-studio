import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { ClickableLogo } from 'atoms';
import { ClickableLogoProps } from 'atoms/ClickableLogo/ClickableLogo';
import { mockNextUseRouter } from '../mocks';

describe(`ClickableLogo`, () => {
    mockNextUseRouter({
        route: '/',
        pathname: '/',
        query: '',
        asPath: `/`,
    });

    const ClickableLogoWithTheme = (props: ClickableLogoProps) => (
        <ThemeProvider theme={theme}>
            <ClickableLogo {...props} />
        </ThemeProvider>
    );

    it(`should render primary colored logo  without error`, () => {
        const wrapper = mount(<ClickableLogoWithTheme logoColor={'primary'} />);
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render secondary colored logo  without error`, () => {
        const wrapper = mount(<ClickableLogoWithTheme logoColor={'secondary'} />);
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render white colored logo  without error`, () => {
        const wrapper = mount(<ClickableLogoWithTheme logoColor={'white'} />);
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render black colored logo  without error`, () => {
        const wrapper = mount(<ClickableLogoWithTheme logoColor={'black'} />);
        expect(wrapper).toMatchSnapshot();
    });
});
