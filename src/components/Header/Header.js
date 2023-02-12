import { Suspense } from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from '../../redux/selectors'; 
import { Outlet } from "react-router-dom"
import { BasicMenu } from "../Menu"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { StyledAppBar, StyledToolbar, StyledLink, StyledAppShortcutIcon, StyledNavLink } from "./Header.styled"

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

        {/* <footer>
          <Container maxWidth="lg">
            <p>footer</p>
          </Container>           
        </footer> */}
    </>
  );
}




