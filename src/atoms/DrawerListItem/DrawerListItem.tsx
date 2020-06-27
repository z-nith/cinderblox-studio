import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import BaseLink from 'atoms/BaseLink';
import useStyles from './styles';

const DrawerListItem = (props: DrawerListItemPropTypes) => {
    const classes = useStyles();

    const { icon, text, external, href } = props;

    return (
        <ListItem
            button
            disableTouchRipple
            component={external ? 'a' : BaseLink}
            href={href}
            classes={{
                root: classes.container,
            }}
        >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText color={'white'} className={classes.listItemText}>
                {text}
            </ListItemText>
        </ListItem>
    );
};

export type DrawerListItemPropTypes = {
    icon: React.ReactNode;
    text: string;
    href: string;
    external: boolean;
};

export default DrawerListItem;
