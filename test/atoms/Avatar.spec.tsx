import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { Avatar } from 'atoms';
import { AvatarPropTypes } from 'atoms/Avatar/Avatar';

describe(`Avatar`, () => {
    const AvatarWithTheme = (props: AvatarPropTypes) => (
        <ThemeProvider theme={theme}>
            <Avatar {...props} />
        </ThemeProvider>
    );

    it(`should render small avatar without error`, () => {
        const wrapper = mount(
            <AvatarWithTheme
                src={'/img/author_avatar.jpg'}
                imgSize={'small'}
                alt={'Jesse Meza'}
                toolTipText={'Author'}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render medium avatar without error`, () => {
        const wrapper = mount(
            <AvatarWithTheme
                src={'/img/author_avatar.jpg'}
                imgSize={'medium'}
                alt={'Jesse Meza'}
                toolTipText={'Author'}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render large avatar without error`, () => {
        const wrapper = mount(
            <AvatarWithTheme
                src={'/img/author_avatar.jpg'}
                imgSize={'large'}
                alt={'Jesse Meza'}
                toolTipText={'Author'}
            />,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
