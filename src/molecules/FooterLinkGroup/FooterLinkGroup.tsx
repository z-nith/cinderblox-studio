import React from 'react';
import { Link, Typography } from 'atoms';
import { NavigationLinkWithIcon } from 'types/navigation';
import useStyles from './styles';

const FooterLinkGroup = (props: FooterLinkGroupPropTypes) => {
    const classes = useStyles();
    const { links, groupHeader } = props;

    return (
        <div className={classes.root}>
            <Typography variant={'subtitle1'}>{groupHeader}</Typography>
            {links.map((link: NavigationLinkWithIcon) => {
                const { displayText, ...rest } = link;
                return (
                    <div
                        key={`footer-link-${link.displayText.replace(' ', '')}`}
                        className={classes.linkContainer}
                    >
                        <Link
                            key={`footer-link-${displayText}`}
                            variant={'footer'}
                            {...rest}
                        >
                            {link.displayText}
                        </Link>
                    </div>
                );
            })}
        </div>
    );
};

export type FooterLinkGroupPropTypes = {
    links: NavigationLinkWithIcon[];
    groupHeader: string;
};

export default FooterLinkGroup;
