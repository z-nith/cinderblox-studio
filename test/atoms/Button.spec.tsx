import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from '@material-ui/core';
import theme from 'theme';
import { Button } from 'atoms';
import { ButtonPropTypes } from 'atoms/Button/Button';

describe(`Button`, () => {
    const ButtonWithTheme = (props: ButtonPropTypes) => (
        <ThemeProvider theme={theme}>
            <Button {...props} />
        </ThemeProvider>
    );

    it(`should render default button without error`, () => {
        const wrapper = mount(
            <ButtonWithTheme onClick={() => {}}>Clickable!</ButtonWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render glow button without error`, () => {
        const wrapper = mount(
            <ButtonWithTheme addGlow={true} onClick={() => {}} paddingRight={false}>
                Clickable!
            </ButtonWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it(`should render padding right button without error`, () => {
        const wrapper = mount(
            <ButtonWithTheme addGlow={false} onClick={() => {}} paddingRight>
                Clickable!
            </ButtonWithTheme>,
        );
        expect(wrapper).toMatchSnapshot();
    });
});
