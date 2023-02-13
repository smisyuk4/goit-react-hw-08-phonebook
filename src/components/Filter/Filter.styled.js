import styled from '@emotion/styled';
import {TextField, styled as styledMui } from "@mui/material"

export const StyledWrap = styled.div`
    position: sticky;
    display: inline-block;
    top: 70px;
    z-index: 2000;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: white;
`

export const StyledTextField = styledMui(TextField)`
  & label.Mui-focused {
    color: black;
  } 

  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: skyblue;
    }
  }
`;