import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';
import ScrollTop from './ScrollToTop';
import { ChevronUp } from 'react-feather';
import { Fab } from '@material-ui/core';

const ScrollToTopButton = (props: ScrollToTopButtonPropTypes) => {
    const classes = useStyles();

    return (
        <ScrollTop {...props}>
            <Fab color="secondary" size="large" aria-label="scroll back to top">
                <ChevronUp color={'white'} />
            </Fab>
        </ScrollTop>
    );
};

export type ScrollToTopButtonPropTypes = {};

export default ScrollToTopButton;
