import React from 'react';
import { TextField as MuiTextField, TextFieldProps } from '@material-ui/core';
import useStyles from './styles';

const TextField = (props: TextFieldProps) => {
    const { InputProps, ...rest } = props;
    const classes = useStyles();

    return (
        <MuiTextField
            variant={'outlined'}
            InputProps={{
                classes: {
                    root: classes.root,
                },
            }}
            {...rest}
        />
    );
};

export default TextField;
