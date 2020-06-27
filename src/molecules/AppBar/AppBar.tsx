import React, { MouseEvent } from 'react';
import {
    AppBar as MuiAppBar,
    AppBarProps,
    Hidden,
    IconButton,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { Avatar, Link } from 'atoms';
import SocialMediaLink from 'atoms/SocialMediaLink';
import { ApiDocs, App, Author, GitHub, Releases, Home } from 'config/Nav';
import { Menu } from 'react-feather';
import { NavigationLinkWithIcon } from 'types/navigation';
import ElevationScroll from './ElevationScroll';
import clsx from 'clsx';
import useStyles from './styles';

const AppBar = (props: AppBarPropTypes) => {
    const { onMobileMenuClick } = props;
    const classes = useStyles();

    const renderMenuButton = () => {
        return (
            <Hidden mdUp>
                <IconButton onClick={onMobileMenuClick}>
                    <Menu color={'white'} />
                </IconButton>
            </Hidden>
        );
    };

    const renderClickableLogo = () => {
        return (
            <Link
                underline={'none'}
                href={Home.href}
                external={false}
                variant={'wrapper'}
            >
                <Typography variant="h6" className={classes.title}>
                    CinderBlox
                </Typography>
            </Link>
        );
    };

    const renderNavLinks = () => {
        return (
            <Hidden smDown>
                <div className={clsx(classes.flexRowBase, classes.rowSpaceBetween)}>
                    {[ApiDocs, App, Releases].map((navLink: NavigationLinkWithIcon) => {
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
                        href={GitHub.href}
                    />
                </div>

                <div className={classes.socialLinkContainer}>
                    <Link variant={'wrapper'} href={Author.href} external>
                        <Avatar
                            toolTipText={'See more works by Jesse'}
                            src={'/img/author_avatar.jpg'}
                            alt={'Developer: Jesse Meza'}
                            imgSize={'large'}
                        />
                    </Link>
                </div>
            </div>
        );
    };

    return (
        <ElevationScroll>
            <MuiAppBar elevation={6} color={'secondary'}>
                <Toolbar
                    classes={{
                        root: classes.root,
                    }}
                    disableGutters
                >
                    <div className={clsx(classes.flexRowBase, classes.toolbarLeft)}>
                        {renderMenuButton()}
                        <Hidden smDown>{renderClickableLogo()}</Hidden>
                    </div>
                    <div className={clsx(classes.flexRowBase, classes.toolbarCenter)}>
                        <Hidden mdUp>{renderClickableLogo()}</Hidden>
                        {renderNavLinks()}
                    </div>
                    <div className={clsx(classes.flexRowBase, classes.toolbarRight)}>
                        {renderSocialLinks()}
                    </div>
                </Toolbar>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export type AppBarPropTypes = AppBarProps & {
    onMobileMenuClick: (event: MouseEvent) => void;
};

export default AppBar;
