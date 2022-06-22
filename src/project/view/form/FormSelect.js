import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from "react";
import {_isEmpty} from "../../lib/common";

const useStyles = makeStyles((theme) => ({
    root: {}
}));

const FormText = (props) => {
    const classes = useStyles();

    let dataGrid;
    let labelGrId;

    if (props.firstDefault) {
        dataGrid =  <MenuItem key='0' value=''>선택안함</MenuItem>;
    }
    if (!_isEmpty(props.label)) {
        labelGrId =  <InputLabel htmlFor={props.id}>{props.label}</InputLabel>;
    }

    return (
        <FormControl
            className={classes.root}
            fullWidth
            required={_isEmpty(props.required) ? false : true}
            disabled={_isEmpty(props.disabled) ? false : true}
        >
            {labelGrId}
            <Select
                labelId={props.id}
                id={props.id}
                name={props.id}
                label={props.label}
                autoComplete="cc-csc"
                variant="standard"
                value={props.value}
                error={Boolean(props.touched && props.errors)}
                // helperText={props.touched && props.errors}
                onBlur={props.onBlur}
                onChange={props.onChange}
                onClick={props.onClick}
            >
                {dataGrid}
                {props.item.map((v, i) =>
                    <MenuItem
                        key={i+1}
                        value={v.code}>
                        {v.name}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    );
};
export default FormText;