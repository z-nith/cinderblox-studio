import React from 'react';
import useStyles from './styles';
import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import clsx from 'clsx';

//TODO: add pop up effect when nearing completion
const Button = (props: ButtonPropTypes) => {
    const classes = useStyles();
    const { paddingRight } = props;

    return (
        <div
            className={clsx({
                [classes.addRightPadding]: paddingRight,
            })}
        >
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
        </div>
    );
};

Button.defaultProps = {
    usePopEffect: false,
    paddingRight: false,
};

export type ButtonPropTypes = ButtonProps & {
    usePopEffect: boolean;
    paddingRight?: boolean;
};

export default Button;
