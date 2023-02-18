import { Grid, IconButton, Button, styled } from "@mui/material"
import { TextField as TextFieldFormik } from 'formik-mui';
import { Link } from "react-router-dom"

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

export const StyledGrid = styled(Grid)`
  position: relative;
`

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 23px;
  right: 10px;
`

export const StyledButton = styled(Button)`
    padding: 6px 6px;
    background-color: skyblue;

    &:hover, &:focus{
        background-color: black;
    }
`

export const StyledLink = styled(Link)`
    color: inherit;
`