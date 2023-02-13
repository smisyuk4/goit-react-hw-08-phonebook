import styled from '@emotion/styled';
import {Button, styled as styledMui } from "@mui/material"
import ControlCameraIcon from '@mui/icons-material/ControlCamera';

export const StyledItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0;    
`

export const StyledContact = styled.div`
    display: flex;
    align-items: center;
`

export const StyledControlCameraIcon = styledMui(ControlCameraIcon)`
    margin-right: 5px;
`

export const StyledButton = styledMui(Button)`
    padding: 6px 6px;
    background-color: skyblue;

    &:hover, &:focus{
        background-color: black;
    }
`