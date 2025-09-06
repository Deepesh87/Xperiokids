import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from "../../assets/new_full_logo_learning.png";
import { NavLink } from 'react-router-dom';

const pages = [
  { to: "/", name: "Home" },
  { to: "/about", name: "About us" },
  { to: "/gallery", name: "Gallery" },
  { to: "/robotics", name: "Robotics" },
  { to: "/public-speaking", name: "Public Speaking" },
  { to: "/finance-for-kids", name: "Finance" },
];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolling, setScrolling] = React.useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar
        style={{
          // background: scrolling ? "white" : "#FFDE21",
          // transition: "background 0.3s ease-in-out",
          // boxShadow: scrolling ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
          background: "#FFFFFF",
          transition: "background 0.3s ease-in-out",
          boxShadow: "none",
        }}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo for mobile */}
            <NavLink to="/" style={{ textDecoration: "none", width: "100%" }} onClick={scrollToTop}>
              <Box
                sx={{
                  display: { xs: "flex", md: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    maxHeight: "100px",
                    maxWidth: "200px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </NavLink>

            {/* Logo for desktop - left aligned */}
            <NavLink to="/" style={{ textDecoration: "none", width: "100%" }} onClick={scrollToTop}>
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "auto",
                  flexGrow: 0,
                }}
              >
                <img
                  src={logo}
                  alt="Logo"
                  style={{
                    maxHeight: "150px",
                    maxWidth: "300px",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </NavLink>

            {/* Mobile menu button */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  color: '#21654E',
                  '&:hover': {
                    backgroundColor: 'transparent',
                  },
                }}
              >
                <MenuIcon sx={{ color: '#21654E' }} />
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
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.to} onClick={handleCloseNavMenu}>
                    <NavLink style={{ textDecoration: "none" }} to={page.to}>
                      <Typography textAlign="center">{page.name}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Desktop menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", gap: "50px" }}>
              {pages.map((page) => (
                <NavLink style={{ textDecoration: "none", display: "inline-block" }} to={page.to} key={page.name}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "black",
                      display: 'block',
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Ensure content is not hidden behind fixed navbar */}
      <Box sx={{ height: "80px" }} />
    </>
  );
}

export default Nav;
