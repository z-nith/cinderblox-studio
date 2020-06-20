import React from 'react';
import { IconButton, useTheme } from '@material-ui/core';
import { GitHub, HelpCircle, Link, Linkedin } from 'react-feather';
import { size } from 'types/size';
import useStyles from './styles';

const SocialMediaLink = (props: SocialMediaLinkPropTypes) => {
    const classes = useStyles();

    const { variant, iconSize, href, color } = props;

    const theme = useTheme();

    // Icon Size Mapping in pixels
    const sizeMap = {
        small: 16,
        medium: 18,
        large: 20,
    };

    // Icon Color map to theme
    const colorMap = {
        light: theme.palette.custom.white75,
        dark: theme.palette.common.white,
    };

    const renderSocialMediaLink = () => {
        let icon;
        const iconProps = {
            color: colorMap[color],
            size: sizeMap[iconSize],
        };
        switch (variant) {
            case 'website':
                icon = <Link {...iconProps} />;
                break;
            case 'github':
                icon = <GitHub {...iconProps} />;
                break;
            case 'linkedin':
                icon = <Linkedin {...iconProps} />;
                break;
            default:
                console.warn(
                    `CinderBlox-UI: Unknown SocialMedia variant "${variant}" passed to component.`,
                );
                icon = <HelpCircle {...iconProps} />;
                break;
        }

        return (
            <IconButton
                component={'a'}
                classes={{
                    root: classes.root,
                }}
                href={href}
                target={'_blank'}
            >
                {icon}
            </IconButton>
        );
    };

    return renderSocialMediaLink();
};

SocialMediaLink.defaultProps = {
    iconSize: 'medium',
    color: 'light',
};

export interface SocialMediaLinkPropTypes {
    variant: 'website' | 'github' | 'linkedin';
    color?: 'light' | 'dark';
    iconSize?: size;
    href: string;
}

export default SocialMediaLink;
