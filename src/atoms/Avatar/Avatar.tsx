import React from 'react';
import useStyles from './styles';
import { Avatar as MuiAvatar, AvatarProps } from '@material-ui/core';
import { size } from 'types/size';

const Avatar = (props: AvatarPropTypes) => {
    const { imgSize, ...rest } = props;

    const classes = useStyles();

    return <MuiAvatar className={classes[imgSize]} {...rest} />;
};

export type AvatarPropTypes = AvatarProps & {
    imgSize: size;
};

export default Avatar;
