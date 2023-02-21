import styled from '@emotion/styled';
import { IconButton, styled as styledMui } from "@mui/material"

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin: 0;
    padding: 0;
    list-style: none;
`

export const StyledIconButton = styledMui(IconButton)`
    position: sticky;
    top: 75px;
    left: 500px;
    z-index: 1000;

    color: white;
    border: 2px solid white;
    background-color: skyblue;

    &:hover, &:focus{
        color: green;
        border-color: black;
        background-color: black;
    }

    @media screen and (min-width: 500px) {  
        left: 50%;
    }
`