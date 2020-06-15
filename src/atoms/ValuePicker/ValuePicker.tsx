import React from 'react';
import { MenuItem, TextField, TextFieldProps } from '@material-ui/core';
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

export type ValuePickerPropTypes = TextFieldProps & {
    pickerValues: string[];
};

export default ValuePicker;
