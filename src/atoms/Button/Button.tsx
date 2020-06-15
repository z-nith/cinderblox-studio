import React from 'react';
import useStyles from './styles';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

//TODO: add pop up effect when nearing completion
const Button = (props: ButtonPropTypes) => {
    const classes = useStyles();

    return (
        <MuiButton
            classes={{
                root: classes.root,
                label: classes.buttonLabel,
                containedPrimary: classes.containedPrimary,
                containedSecondary: classes.containedSecondary,
            }}
            disableElevation
            {...props}
        />
    );
};

Button.defaultProps = {
    usePopEffect: false,
};

export type ButtonPropTypes = ButtonProps & {
    usePopEffect: Boolean;
};

export default Button;
