import { Button, styled } from "@mui/material"
import { Link } from "react-router-dom"

export const StyledButton = styled(Button)`
    &:hover, &:focus{
        color: black;
    }
`

export const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: inherit;
`