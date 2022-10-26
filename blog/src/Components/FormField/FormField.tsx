import {Field} from "formik";
import {TextField} from "@mui/material";
import React, {ChangeEvent} from "react";
import Box from "@mui/material/Box";

type FieldType = {
    name: string
    label: string
    error?: string
    value: string,
    setValue: (name: string, value: string) => void
    [key: string]: any
}

export const FormField: React.FC<FieldType> = ({name, label, error,
                                                   value, setValue, ...restProps}) => {
    return (
        <Box sx={{display: 'flex', flex: 1, flexDirection: 'column', width: '350px'}}>
            <Field {...restProps}
                   name={name} component={TextField}
                   id={name} label={label}
                   fullWidth
                   margin="normal"
                   error={!!error}
                   helperText={error}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => {
                       setValue(name, e.currentTarget.value)
                   }}
                   value={value}
                   sx={{background: '#FFE5B4', borderRadius: '4px'}}
                   variant="outlined"/>
        </Box>

    )
}