import { FormControl, RadioGroup, FormControlLabel, FormLabel, Radio } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from "react";
import {_isEmpty} from "../../lib/common";

const useStyles = makeStyles((theme) => ({
    root: {

    }
}));

const FormOption = (props) => {
    const classes = useStyles();

    let _items = [];

    if(_isEmpty(props.item)) {
        _items = [
            { label: '아니오', value: false },
            { label: '예', value: true }
        ];
    } else {
        _items = props.item;
    }

    return (
        <FormControl
            className={classes.root}
            fullWidth
            required={_isEmpty(props.required) ? false : true}
            disabled={_isEmpty(props.disabled) ? false : true}
        >
            <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
            <RadioGroup
                row
                id={props.id}
                name={props.id}
                autoComplete="cc-csc"
                variant="standard"
                value={props.value}
                // error={Boolean(props.touched && props.errors)}
                // helperText={props.touched && props.errors}
                onBlur={props.onBlur}
                onChange={props.onChange}
                onClick={props.onClick}
            >
                {_items.map((v, i) =>
                    <FormControlLabel
                        key={i+1}
                        value={v.value}
                        control={<Radio color="primary" />}
                        label={v.label}
                        labelPlacement="end"
                        disabled={v.disabled}
                    />
                )}
            </RadioGroup>
        </FormControl>
    );
};
export default FormOption;