import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import styles from '../styles/Home.module.css';
import {useRef} from "react";

const pages = ['home', 'cases', 'resume', 'about', 'contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const navigations = pages.map(page => {
    return {
      page,
      ref: useRef(null),
      link: page == 'resume' ? 'https://drive.google.com/file/d/1JRaONeoTBhpzagPXVG3cNwSLfcNrxBzL/view?usp=share_link' : ''
    };
  });

  const scrollToSection = (event, ref) => {
    event.preventDefault();
    console.log(navigations);
    debugger;
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className={styles.bkgBlack}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SINMISOLA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navigations.map(({ page, ref, link}) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <a href={page == 'resume' ? link : `#${page}`} target={page == 'resume' ? '_blank' : ''}>{page.toUpperCase()}</a>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SINMISOLA
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'flex-end' } }}>
            {navigations.map(({page, link}) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href={page == 'resume' ? link : `#${page}`} target={page == 'resume' ? '_blank' : ''}>{page.toUpperCase()}</a>
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar;




// const { useRef } = React;
//
// const NavBar = ({sections}) => {
//   const scrollToSection = (event, ref) => {
//     event.preventDefault();
//     ref.current.scrollIntoView({
//       behavior: "smooth",
//     });
//   };
//   return <nav>
//     {sections.map(({title, ref}) =>
//       <a key={title} href={`#${title}`} onClick={(event) => scrollToSection(event, ref)}>
//         {title}
//       </a>
//     )}
//   </nav>;
// };
//
// const sectionTitles = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
// ];
// const Example = () => {
//   const sections = sectionTitles.map((title) => {
//     return {title, ref: useRef(null)};
//   });
//
//   return <div>
//     <NavBar sections={sections} />
//     <main>
//       {sections.map(({title, ref}) =>
//         <section key={title} ref={ref}>
//           {title}
//         </section>
//       )}
//     </main>
//   </div>;
// };
