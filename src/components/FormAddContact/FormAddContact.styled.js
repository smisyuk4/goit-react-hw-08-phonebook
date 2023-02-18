import { Button, styled } from "@mui/material"
import { TextField as TextFieldFormik } from 'formik-mui';

export const StyledTextField = styled(TextFieldFormik)`
  /* & label.Mui-focused {
    color: black;
  } 

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: skyblue;
    }
  } */
`;

export const StyledButton = styled(Button)`
    background-color: skyblue;

    &:hover, &:focus{
        background-color: black;
    }
`
