import { useState } from "react"
import { useDispatch } from "react-redux";
import { setLogout } from 'redux/auth/authSlice';
import { useLogoutMutation } from 'redux/auth/apiSlice';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import avatar from "../../images/avatar.JPG"
import { StyledTooltip, StyledLink } from "./UserMenu.styled"

export const UserMenu = () =>{   
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [ logout ] = useLogoutMutation()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            await logout()      
            dispatch(setLogout())
        } catch (error){
            console.log(error)
        }
    }

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };  

    return (<>
       <Box sx={{ flexGrow: 0 }}>
            <StyledTooltip title="My menu">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src={avatar} />
              </IconButton>
            </StyledTooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
             <MenuItem onClick={handleCloseUserMenu}>
                <StyledLink to="profile">
                    Profile
                </StyledLink>
            </MenuItem>
            <MenuItem onClick={()=>{
                handleCloseUserMenu()
                handleLogout()
            }}>
                <StyledLink to="/">
                    Logout
                </StyledLink>            
            </MenuItem>  
            </Menu>
          </Box>
    </>)
}