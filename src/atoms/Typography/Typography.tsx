import React from 'react';
import { Typography as MuiTypography, TypographyProps } from '@material-ui/core';
import useStyles from './styles';

const Typography = (props: TypographyProps) => {
    const classes = useStyles();

    return (
        <MuiTypography
            {...props}
            classes={{
                colorTextPrimary: classes.colorTextPrimary,
                colorTextSecondary: classes.colorTextSecondary,
            }}
        />
    );
};

Typography.defaultProps = {
    color: 'textPrimary',
};

export default Typography;
