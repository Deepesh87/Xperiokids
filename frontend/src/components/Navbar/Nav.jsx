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
import logo from "../../assets/logo_.svg";
import { NavLink } from 'react-router-dom';

const pages = [
  { to: "/", name: "Home🏠" },
  { to: "/about", name: "About us 👨‍👨‍👦‍👦" },
  { to: "/gallery", name: "Gallery📷" },
  { to: "/sudoku", name: "Sudoku" },
  { to: "/voicemasters", name: "VoiceMasters🎤" },
  { to: "/camp", name: "Summer Camp 2024🏄" },
];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [scrolling, setScrolling] = React.useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar style={{ background: scrolling ? "white" : "#faf2fe" }} position={scrolling ? "sticky" : "static"}>
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
                justifyContent: "flex-start",  // Left align logo on desktop
                alignItems: "center",
                width: "auto",  // Ensures it doesn’t stretch
                flexGrow: 0, // Prevent logo from growing
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
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
                    color: scrolling ? "black" : "black",
                    display: 'block',
                    fontWeight: "bold",
                    whiteSpace: "nowrap",  // Prevent wrapping
                    textOverflow: "ellipsis", // Ensure text doesn't overflow
                    overflow: "hidden", // Hide any overflow text
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
  );
}

export default Nav;
