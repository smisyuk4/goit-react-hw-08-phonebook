import { Tooltip, styled } from "@mui/material"
import { Link } from "react-router-dom"

export const StyledTooltip = styled(Tooltip)`
    border: 2px solid white;

    &:hover, &:focus{
        border-color: black;
    }
`

export const StyledLink = styled(Link)`
    width: 100%;
    text-decoration: none;
    color: inherit;
`