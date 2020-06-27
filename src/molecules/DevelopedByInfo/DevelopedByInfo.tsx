import React from 'react';
import { Avatar } from 'atoms';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const DevelopedByInfo = (props: DevelopedByInfoPropTypes) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar
                toolTipText={'See more works by Jesse'}
                src={'/img/author_avatar.jpg'}
                alt={'Developer: Jesse Meza'}
                imgSize={'medium'}
            />
            <Typography
                component={'span'}
                variant={'body1'}
                className={classes.developerText}
            >
                Developed by{' '}
                <Typography color={'primary'} variant={'body1'} display={'inline'}>
                    Jesse Meza
                </Typography>
            </Typography>
        </div>
    );
};

export type DevelopedByInfoPropTypes = {};

export default DevelopedByInfo;
