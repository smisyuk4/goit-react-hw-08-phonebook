import * as React from 'react';
import { Outlet } from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BasicMenu} from "../Menu"

export const Header = () => {
  return (<>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>
          <BasicMenu/>
        </Toolbar>
      </AppBar>
    </Box>
    <Outlet/>
    </>
  );
}