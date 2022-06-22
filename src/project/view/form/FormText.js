import { TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from "react";
import {_isEmpty} from "../../lib/common";

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const FormText = (props) => {
    const classes = useStyles();

    return (
        <TextField
            className={classes.root}
            required={_isEmpty(props.required) ? false : true}
            disabled={_isEmpty(props.disabled) ? false : true}
            id={props.id}
            label={props.label}
            placeholder={props.placeholder}
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            value={props.value}
            error={Boolean(props.touched && props.errors)}
            helperText={props.touched && props.errors}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onClick={props.onClick}
            InputLabelProps={{
                shrink: true,
            }} />
    );
};
export default FormText;