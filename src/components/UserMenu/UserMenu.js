import { useState } from "react"
import { Link } from "react-router-dom"

import { useDispatch } from "react-redux";
import { setLogout } from 'redux/auth/authSlice';
import { useLogoutMutation } from 'redux/auth/apiSlice';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import avatar from "../../images/avatar.JPG"

export const UserMenu = () =>{   
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [ logout ] = useLogoutMutation()
    const dispatch = useDispatch()

    const handleLogout = async () => {
        try {
            await logout()      
            console.log('push logout')   
            dispatch(setLogout())
            console.log('set ----- logout')   
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
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="avatar" src={avatar} />
              </IconButton>
            </Tooltip>
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
                <Link to="profile">
                    Profile
                </Link>
            </MenuItem>
            <MenuItem onClick={()=>{
                handleCloseUserMenu()
                handleLogout()
            }}>
                <Link to="/">
                    Logout
                </Link>            
            </MenuItem>  
            </Menu>
          </Box>
    </>)
}