// import { InputLabel, OutlinedInput, Button, styled } from "@mui/material"
// import { useField } from "formik";
// import { TextField } from 'formik-mui';
import { useCallback } from 'react'


import TextField from '@mui/material/TextField';
import { fieldToTextField } from 'formik-mui';

export const UpperCasingTextField = (props) => {
  const {
    form: { setFieldValue },
    field: { name },
  } = props;
  
  const onChange = useCallback(
    (event) => {
      const { value } = event.target;
      setFieldValue(name, value ? value.toUpperCase() : '');
    },
    [setFieldValue, name]
  );
  return <TextField {...fieldToTextField(props)} onChange={onChange} />;
}

// export const TextFieldWrapper = ({
//     name,
//     ...otherProps
// }) => {
//     const [field, meta ] = useField(name)

//     const configTextField = {
//         ...field,
//         ...otherProps,
//         fullWidth: true,
//         variant: 'outlined'
//     }

//     if (meta && meta.touched && meta.error){
//         configTextField.error = true
//         configTextField.helperText = meta.error
//     }

//     return (
//         <TextField {...configTextField}/>
//     );
// }