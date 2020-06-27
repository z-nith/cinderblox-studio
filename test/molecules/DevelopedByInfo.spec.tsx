import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { DevelopedByInfo } from 'molecules';
import { DevelopedByInfoPropTypes } from 'molecules/DevelopedByInfo/DevelopedByInfo';
import { mockNextUseRouter } from '../mocks';

describe(`DevelopedByInfo`, () => {
    mockNextUseRouter({
        route: '/test',
        pathname: '/test',
        query: '',
        asPath: `/test`,
    });

    const DevelopedByInfoWithTheme = (props: DevelopedByInfoPropTypes) => (
        <ThemeProvider theme={theme}>
            <DevelopedByInfo {...props} />
        </ThemeProvider>
    );

    it(`should render without error`, () => {
        const wrapper = mount(<DevelopedByInfoWithTheme />);
        expect(wrapper).toMatchSnapshot();
    });
});
