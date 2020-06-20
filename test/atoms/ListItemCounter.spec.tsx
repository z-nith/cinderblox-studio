import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { ListItemCounter } from 'atoms';
import { ListItemCounterPropTypes } from 'atoms/ListItemCounter/ListItemCounter';

describe(`ListItemCounter`, () => {
    const ListItemCounterWithTheme = (props: ListItemCounterPropTypes) => (
        <ThemeProvider theme={theme}>
            <ListItemCounter {...props} />
        </ThemeProvider>
    );

    it(`should render without error`, () => {
        const wrapper = mount(<ListItemCounterWithTheme count={1} />);
        expect(wrapper).toMatchSnapshot();
    });
});
