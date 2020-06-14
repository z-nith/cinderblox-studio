import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import CopyrightNotice from 'atoms/CopyrightNotice';
import { CopyrightNoticePropTypes } from 'atoms/CopyrightNotice/CopyrightNotice';

describe(`CopyrightNotice`, () => {
    const CopyrightNoticeWithTheme = (props: CopyrightNoticePropTypes) => (
        <ThemeProvider theme={theme}>
            <CopyrightNotice {...props} />
        </ThemeProvider>
    );

    it(`should render without error`, () => {
        const wrapper = mount(<CopyrightNoticeWithTheme />);
        expect(wrapper).toMatchSnapshot();
    });
});
