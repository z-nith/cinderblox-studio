import React from 'react';
import useStyles from './styles';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';

const Button = (props: ButtonProps) => {
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
        ></MuiButton>
    );
};

export default Button;
