import { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/selectors'; 
import { Outlet } from "react-router-dom"
import { BasicMenu } from "../Menu"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { StyledAppBar, StyledToolbar, StyledLink, StyledAppShortcutIcon, StyledNavLink, StyledBottomNavigation } from "./Header.styled"

const navItems = [
  {
    page: 'Contacts',
    link: 'contacts'
  },
];

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (<>     
        <StyledAppBar>
          <StyledToolbar>             
              <StyledLink to="/">
                <StyledAppShortcutIcon/>
                <Typography variant="h6">
                  Phonebook
                </Typography>                
              </StyledLink> 
            
              {isLoggedIn && <Box >
                {navItems.map(({page, link}) => (
                    <StyledNavLink key={page} to={link}>
                        {page}
                    </StyledNavLink>   
                ))}
              </Box>}          

              <BasicMenu/>
            </StyledToolbar>
        </StyledAppBar>      

        <Suspense fallback={<div>Loading page...</div>}>
          <main>   
            <Container maxWidth="lg">
                <Outlet />
            </Container>            
          </main>
        </Suspense>

        <footer>  
          <StyledBottomNavigation>
            <BottomNavigationAction
              href='https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D0%BC%D0%B8%D1%81%D1%8E%D0%BA'
              target="_blank" 
              rel="noopener noreferer"
              area-label="linkedin dev"   
              icon={<LinkedInIcon />} 
            />     

            <BottomNavigationAction
              href='https://www.linkedin.com/in/olena-boiko/'
              target="_blank" 
              rel="noopener noreferer"
              area-label="linkedin qa" 
              icon={<LinkedInIcon />} 
            />
          </StyledBottomNavigation>   
        </footer>
    </>
  );
}