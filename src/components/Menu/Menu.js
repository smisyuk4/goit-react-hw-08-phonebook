import { useState } from 'react';
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/selectors'; 
import { UserMenu } from "../UserMenu"

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { StyledButton, StyledLink } from "./Menu.styled"

export const BasicMenu = () =>{
  const [anchorEl, setAnchorEl] = useState(null);
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      {isLoggedIn ? 
      <UserMenu/> : 
      <>
        <StyledButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="inherit"
        >
          <MenuIcon />
        </StyledButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>
            <StyledLink to="registration">
                Registration
            </StyledLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <StyledLink to="login">
                    Login
                </StyledLink>            
            </MenuItem>            
        </Menu>
      </>
      }      
    </div>
  );
}