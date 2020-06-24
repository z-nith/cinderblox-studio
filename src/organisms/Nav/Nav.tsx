import React, { useState } from 'react';
import { AppBar } from 'atoms';
import { Drawer } from 'organisms';

const Nav = (props: NavPropTypes) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    return (
        <React.Fragment>
            <AppBar
                onMobileMenuClick={(event) => {
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
            />
        </React.Fragment>
    );
};

export type NavPropTypes = {};

export default Nav;
