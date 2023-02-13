import {Button, styled } from "@mui/material"
import { Link } from "react-router-dom"


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