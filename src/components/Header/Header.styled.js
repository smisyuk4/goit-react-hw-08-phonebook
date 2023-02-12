import {AppBar, Toolbar, styled } from "@mui/material"
import { NavLink, Link } from "react-router-dom"
import AppShortcutIcon from '@mui/icons-material/AppShortcut';

export const StyledAppBar = styled(AppBar)`
    position: sticky;
    background-color: skyblue;
`

export const StyledToolbar = styled(Toolbar)`
    justify-content: space-between;
`

export const StyledLink = styled(Link)`
    display: flex;    
    align-items: center;
    text-decoration: none;
    color: inherit;

    &:hover, &:focus{
        color: black;
    }
`

export const StyledAppShortcutIcon = styled(AppShortcutIcon)`
    margin-right: 5px;   
`

export const StyledNavLink = styled(NavLink)`
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    color: inherit;

    & .active {
        text-decoration: underline;
    }

    &:hover, &:focus{
        color: black;       
    }
`
