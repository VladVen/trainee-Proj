import { Field } from 'formik';
import { TextField } from '@mui/material';
import React, { ChangeEvent } from 'react';
import Box from '@mui/material/Box';

type FieldType = {
  name: string;
  label: string;
  error?: string;
  value: string;
  touched?: boolean;
  setValue: (name: string, value: string) => void;
  [key: string]: any;
};

export const FormField: React.FC<FieldType> = ({ name, label, error, touched, value, setValue, ...restProps }) => {
  return (
    <Box sx={{ minWidth: '20vw' }}>
      <Field
        {...restProps}
        name={name}
        component={TextField}
        id={name}
        label={label}
        fullWidth
        margin="normal"
        error={!!error && touched}
        helperText={touched && error}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(name, e.currentTarget.value);
        }}
        value={value}
        sx={{ background: '#FFE5B4', borderRadius: '4px' }}
        variant="outlined"
      />
    </Box>
  );
};
