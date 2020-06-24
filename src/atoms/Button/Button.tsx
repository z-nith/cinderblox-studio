import { Button as MuiButton, ButtonProps } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

const Button = (props: ButtonPropTypes) => {
    const classes = useStyles();
    const { paddingRight, addGlow, color, ...rest } = props;

    return (
        <div
            className={clsx({
                [classes.addRightPadding]: paddingRight,
            })}
        >
            <MuiButton
                classes={{
                    root: clsx(classes.root, {
                        [classes.addPrimaryGlow]: addGlow && color === 'primary',
                        [classes.addSecondaryGlow]: addGlow && color === 'secondary',
                    }),
                    label: classes.buttonLabel,
                    containedPrimary: classes.containedPrimary,
                    containedSecondary: classes.containedSecondary,
                }}
                color={color}
                disableRipple
                //disableElevation
                {...rest}
            />
        </div>
    );
};

Button.defaultProps = {
    addGlow: false,
    paddingRight: false,
};

export type ButtonPropTypes = ButtonProps & {
    addGlow?: boolean;
    paddingRight?: boolean;
};

export default Button;
