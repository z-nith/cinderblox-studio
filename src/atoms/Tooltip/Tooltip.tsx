import React from 'react';
import useStyles from './styles';
import { Tooltip as MuiToolTip, TooltipProps } from '@material-ui/core';

const Tooltip = (props: TooltipProps) => {
    const classes = useStyles();

    return (
        <MuiToolTip
            {...props}
            classes={{
                arrow: classes.arrow,
                tooltip: classes.tooltip,
            }}
        />
    );
};

export default Tooltip;
