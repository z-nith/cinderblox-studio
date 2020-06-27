import React, { useState } from 'react';
import { AppBar } from 'molecules';
import { Drawer } from 'organisms';

const Nav = (props: NavPropTypes) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    return (
        <React.Fragment>
            <AppBar
                onMobileMenuClick={() => {
                    setDrawerIsOpen(true);
                }}
            />
            <div id="back-to-top-anchor" />
            <Drawer
                open={drawerIsOpen}
                onOpen={() => {
                    setDrawerIsOpen(true);
                }}
                onClose={() => {
                    setDrawerIsOpen(false);
                }}
                onMenuCloseClick={() => setDrawerIsOpen(false)}
            />
        </React.Fragment>
    );
};

export type NavPropTypes = {};

export default Nav;
