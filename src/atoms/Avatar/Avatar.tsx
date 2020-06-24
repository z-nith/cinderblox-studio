import React from 'react';
import { Avatar, AvatarProps } from '@material-ui/core';
import { Tooltip } from 'atoms';
import { size } from 'types/size';
import useStyles from './styles';

const AuthorAvatar = (props: AvatarPropTypes) => {
    const { imgSize, toolTipText, ...rest } = props;

    const classes = useStyles();

    return (
        <Tooltip title={toolTipText} arrow>
            <div>
                <Avatar {...rest} className={classes[imgSize]} />
            </div>
        </Tooltip>
    );
};

export type AvatarPropTypes = AvatarProps & {
    imgSize: size;
    toolTipText?: string;
};

export default AuthorAvatar;
