import React from 'react';
import { Tooltip as MuiToolTip, TooltipProps } from '@material-ui/core';
import useStyles from './styles';

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
