import React from 'react';
import clsx from 'clsx';
import useStyles from './styles';

const ContentMarginContainer = (props: ContentMarginContainerPropTypes) => {
    const { children, className, ...rest } = props;
    const classes = useStyles();

    return (
        <div className={clsx(classes.root, className ? className : null)} {...rest}>
            {children}
        </div>
    );
};

export type ContentMarginContainerPropTypes = {
    children: React.ReactNode;
    className?: string;
};

export default ContentMarginContainer;
