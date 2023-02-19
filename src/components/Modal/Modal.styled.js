import { Box, Button, styled as styledMui } from '@mui/material';

export const StyledBox = styledMui(Box)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);   
    padding: 10px;
    min-width: 320px;
    background-color: white;
    border: 2px solid #000;
    box-shadow: 24px;
    border-radius: 5px;
`

export const StyledButton = styledMui(Button)`
    position: absolute;
    right: 10px;
    padding: 6px 6px;
    min-width: auto;
    background-color: skyblue;

    &:hover, &:focus{
        color: red;
        background-color: black;
    }
`