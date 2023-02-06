import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/selectors'; 
import { UserMenu } from "../UserMenu"

export const BasicMenu = () =>{
  const [anchorEl, setAnchorEl] = React.useState(null);
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
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="inherit"
        >
          <MenuIcon />
        </Button>
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
            <Link to="registration">
                Registration
            </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <Link to="login">
                    Login
                </Link>            
            </MenuItem>            
        </Menu>
      </>
      }      
    </div>
  );
}