import React, { MouseEvent } from 'react';
import {
    Divider,
    IconButton,
    SwipeableDrawer,
    SwipeableDrawerProps,
} from '@material-ui/core';
import { ClickableLogo, CopyrightNotice, DrawerListItem, Link } from 'atoms';
import { ApiDocs, App, Author, GitHub, Licenses, Releases, TermsOfUse } from 'config/Nav';
import { DevelopedByInfo } from 'molecules';
import { X } from 'react-feather';
import useStyles from './styles';

const Drawer = (props: DrawerPropTypes) => {
    const classes = useStyles();

    const { anchor, onMenuCloseClick, ...rest } = props;

    const renderCloseButton = () => {
        return (
            <IconButton
                size={'medium'}
                onClick={onMenuCloseClick}
                className={classes.closeButton}
            >
                <X color={'white'} size={16} />
            </IconButton>
        );
    };

    return (
        <SwipeableDrawer
            anchor={'left'}
            {...rest}
            classes={{
                modal: classes.modalProps,
                paper: classes.paper,
            }}
        >
            <div className={classes.header}>
                <ClickableLogo />
                {renderCloseButton()}
            </div>
            <DrawerListItem
                href={ApiDocs.href}
                external={ApiDocs.external}
                icon={ApiDocs.icon}
                text={ApiDocs.displayText}
            />
            <DrawerListItem
                href={App.href}
                external={App.external}
                icon={App.icon}
                text={App.displayText}
            />
            <DrawerListItem
                href={Releases.href}
                external={Releases.external}
                icon={Releases.icon}
                text={Releases.displayText}
            />
            <div className={classes.dividerContainer}>
                <Divider variant={'fullWidth'} />
            </div>
            <DrawerListItem
                href={Licenses.href}
                external={Licenses.external}
                icon={Licenses.icon}
                text={Licenses.displayText}
            />
            <DrawerListItem
                href={TermsOfUse.href}
                external={TermsOfUse.external}
                icon={TermsOfUse.icon}
                text={TermsOfUse.displayText}
            />
            <DrawerListItem
                href={GitHub.href}
                external={GitHub.external}
                icon={GitHub.icon}
                text={GitHub.displayText}
            />
            <div className={classes.drawerBottom}>
                <div className={classes.developerInfoContainer}>
                    <Link external href={Author.href} variant="wrapper">
                        <DevelopedByInfo />
                    </Link>
                </div>
                <div className={classes.copyrightNoticeContainer}>
                    <CopyrightNotice />
                </div>
            </div>
        </SwipeableDrawer>
    );
};

export type DrawerPropTypes = SwipeableDrawerProps & {
    onMenuCloseClick: (event: MouseEvent) => void;
};

export default Drawer;
