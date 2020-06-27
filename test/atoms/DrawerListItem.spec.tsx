import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { DrawerListItem } from 'atoms';
import { DrawerListItemPropTypes } from 'atoms/DrawerListItem/DrawerListItem';
import { GitHub } from 'react-feather';
import { mockNextUseRouter } from '../mocks';

describe(`DrawerListItem`, () => {
    mockNextUseRouter({
        route: '/test',
        pathname: '/test',
        query: '',
        asPath: `/test`,
    });

    const DrawerListItemWithTheme = (props: DrawerListItemPropTypes) => (
        <ThemeProvider theme={theme}>
            <DrawerListItem {...props} />
        </ThemeProvider>
    );

    it(`should  render list item without error`, () => {
        const wrapper = mount(
            <DrawerListItemWithTheme
                icon={<GitHub color={'white'} />}
                text={'Github'}
                href={'https://github.com/'}
                external
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
