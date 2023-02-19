import { IconButton, styled } from "@mui/material"

export const StyledIconButton = styled(IconButton)`
    position: sticky;
    top: 75px;
    left: 500px;
    z-index: 1000;

    color: white;
    background-color: skyblue;

    &:hover, &:focus{
        color: green;
        background-color: black;
    }

    @media screen and (min-width: 500px) {  
        left: 50%;
    }
`