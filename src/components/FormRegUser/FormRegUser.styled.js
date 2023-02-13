import { TextField, InputLabel, OutlinedInput, Button, styled } from "@mui/material"

import { Link } from "react-router-dom"

export const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: black;
  } 

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: skyblue;
    }
  }
`;

export const StyledInputLabel = styled(InputLabel)`
    &.Mui-focused {
        color: black;
    } 
`

export const StyledOutlinedInput = styled(OutlinedInput)`
    & .Mui-focused {
        border-color: red;
    } 

    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: skyblue;
    }
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