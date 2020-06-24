import React from 'react';
import useStyles from './styles';
import BaseLink, { BaseLinkPropTypes } from 'atoms/BaseLink/BaseLink';
import { Typography } from '@material-ui/core';

const Link = (props: LinkPropTypes) => {
    const { variant, children, external, ...linkProps } = props;

    const classes = useStyles();

    const getLinkVariant = () => {
        if (variant === 'wrapper') {
            if (external) {
                return (
                    <a {...linkProps} className={classes['wrapping-link']}>
                        {children}
                    </a>
                );
            }
            return <BaseLink {...linkProps}>{children}</BaseLink>;
        }
        return (
            <Typography
                variant={'body1'}
                component={external ? 'a' : BaseLink}
                {...linkProps}
                className={classes[`${variant}-link`]}
            >
                {children}
            </Typography>
        );
    };

    return getLinkVariant();
};

Link.defaultProps = {
    external: false,
    variant: 'default-primary',
};

export interface LinkPropTypes extends BaseLinkPropTypes {
    variant:
        | 'wrapper'
        | 'default-primary'
        | 'default-blue'
        | 'footer'
        | 'appBar'
        | 'naked';
    external?: boolean;
    target?: string;
    underline?: string;
}

export default Link;
