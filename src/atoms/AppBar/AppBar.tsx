import React from 'react';
import {
    AppBar as MuiAppBar,
    AppBarProps,
    Hidden,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import Avatar from 'atoms/Avatar';
import Link from 'atoms/Link';
import SocialMediaLink from 'atoms/SocialMediaLink';
import Tooltip from 'atoms/Tooltip';
import { APP_BAR } from 'config/Nav';
import { Menu } from 'react-feather';
import { navigationLink } from 'types/navigation';
import ElevationScroll from './ElevationScroll';
import useStyles from './styles';
import clsx from 'clsx';

const AppBar = (props: AppBarProps) => {
    const classes = useStyles();

    const renderMenuButton = () => {
        return (
            <Hidden mdUp>
                <IconButton>
                    <Menu color={'white'} />
                </IconButton>
            </Hidden>
        );
    };

    const renderClickableLogo = () => {
        return (
            <Hidden smDown>
                <Link underline={'none'} href={'/'} variant={'wrapper'}>
                    <Typography variant="h6" className={classes.title}>
                        CinderBlox
                    </Typography>
                </Link>
            </Hidden>
        );
    };

    const renderNavLinks = () => {
        return (
            <Hidden smDown>
                <div className={clsx(classes.flexRowBase, classes.rowSpaceBetween)}>
                    {APP_BAR.map((navLink: navigationLink) => {
                        return (
                            <div
                                key={navLink.displayText}
                                className={classes.navlinkContainer}
                            >
                                <Link
                                    variant={'appBar'}
                                    href={navLink.href}
                                    as={navLink.as}
                                    external={Boolean(navLink.external)}
                                >
                                    {navLink.displayText}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </Hidden>
        );
    };

    const renderSocialLinks = () => {
        return (
            <div className={clsx(classes.flexRowBase, classes.rowSpaceBetween)}>
                <div className={classes.socialLinkContainer}>
                    <SocialMediaLink
                        variant={'github'}
                        color={'dark'}
                        iconSize={'small'}
                        href={'https://github.com/'}
                    />
                </div>

                <div className={classes.socialLinkContainer}>
                    <Tooltip title={'See more works by Jesse'} arrow>
                        <div>
                            <Link variant={'wrapper'} href={'//z-nith.design'}>
                                <Avatar
                                    src={'/img/author_avatar.jpg'}
                                    alt={'Developer: Jesse Meza'}
                                    imgSize={'large'}
                                />
                            </Link>
                        </div>
                    </Tooltip>
                </div>
            </div>
        );
    };

    return (
        <React.Fragment>
            <ElevationScroll>
                <MuiAppBar elevation={6} color={'secondary'}>
                    <Toolbar
                        classes={{
                            root: classes.root,
                        }}
                    >
                        <div className={clsx(classes.flexRowBase, classes.toolbarLeft)}>
                            {renderMenuButton()}
                            {renderClickableLogo()}
                        </div>
                        <div className={clsx(classes.flexRowBase, classes.toolbarCenter)}>
                            {renderNavLinks()}
                        </div>
                        <div className={clsx(classes.flexRowBase, classes.toolbarRight)}>
                            {renderSocialLinks()}
                        </div>
                    </Toolbar>
                </MuiAppBar>
            </ElevationScroll>
            <div id="back-to-top-anchor" />
        </React.Fragment>
    );
};

export default AppBar;
