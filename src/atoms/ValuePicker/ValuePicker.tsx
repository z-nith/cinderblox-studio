import { MenuItem, TextField } from '@material-ui/core';
import React from 'react';
import { ValuePickerPropTypes } from '.';
import useStyles from './styles';

const ValuePicker = (props: ValuePickerPropTypes) => {
    const classes = useStyles();

    const { pickerValues, ...rest } = props;

    return (
        <TextField
            select
            variant={'outlined'}
            color={'secondary'}
            InputProps={{
                classes: {
                    root: classes.root,
                },
            }}
            SelectProps={{
                MenuProps: {
                    classes: {
                        paper: classes.menu,
                    },
                },
            }}
            {...rest}
        >
            {pickerValues.map((option: string) => (
                <MenuItem
                    key={option}
                    value={option}
                    classes={{
                        root: classes.menuItem,
                    }}
                >
                    {option}
                </MenuItem>
            ))}
        </TextField>
    );
};

export default ValuePicker;
