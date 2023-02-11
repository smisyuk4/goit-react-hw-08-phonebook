// import * as React from 'react';
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/selectors'; 
import { NavLink, Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
import { BasicMenu } from "../Menu"

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = [
  {
    page: 'Contacts',
    link: 'contacts'
  },
];

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (<>     
        <AppBar position="fixed">
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link to="/">
                  Phonebook
                </Link> 
              </Typography>
            
              {isLoggedIn && <Box >
                {navItems.map(({page, link}) => (
                  <Button key={page} sx={{ color: '#fff' }}>
                    <NavLink to={link}>
                      {page}
                    </NavLink>   
                  </Button>
                ))}
              </Box>}          

              <BasicMenu/>
            </Toolbar>
          </Box>
        </AppBar>
      

      <Suspense fallback={<div>Loading page...</div>}>
        <main>
            <Outlet />
        </main>
      </Suspense>
    </>
  );
}




