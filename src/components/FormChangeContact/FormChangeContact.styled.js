import { TextField, Button, styled } from "@mui/material"

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

export const StyledButton = styled(Button)`
    background-color: skyblue;

    &:hover, &:focus{
        background-color: black;
    }
`