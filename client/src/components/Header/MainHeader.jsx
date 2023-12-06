import { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Tab,
  Tabs,
  Typography,
  useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import logo from "../../assets/images/main-logo.png";
import navItems from "../../data/mainHeaderItem";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import { Link, useNavigate } from "react-router-dom";

export default function MainHeader() {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const index = localStorage.getItem("selectIndex");
    setValue(parseInt(index));
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("selectIndex", newValue);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMainMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleClick = () => {
    navigate("/");
    setValue(0);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {navItems.map(({ text, url }, index) => (
        <MenuItem
          key={index}
          sx={{ color: "#222", indicator: "#222", textTransform: "revert" }}
          component={Link}
          to={url}
        >
          {text}
        </MenuItem>
      ))}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton component="a" href="https://www.facebook.com">
          <FacebookIcon
            sx={{
              color: theme.palette.primary[500],
              fontSize: "20px"
            }}
          ></FacebookIcon>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton component="a" href="https://twitter.com">
          <Twitter
            sx={{
              color: theme.palette.primary[500],
              fontSize: "20px"
            }}
          ></Twitter>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton component="a" href="https://www.linkedin.com">
          <LinkedInIcon
            sx={{
              color: theme.palette.primary[500],
              fontSize: "20px"
            }}
          ></LinkedInIcon>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={isScrolled ? "main-header-scroll" : "main-header"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
            onClick={handleMainMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 0.1 }} />
          <Box mt="1rem">
            <img
              src={logo}
              alt="Logo"
              className="image-cursor"
              onClick={handleClick}
            ></img>
          </Box>
          <Box sx={{ flexGrow: 0.8 }} />
          <Box>
            <Box
              sx={{
                height: "0.5rem",
                ml: "25vw",
                display: { xs: "none", md: "flex" }
              }}
            >
              <Typography
                fontFamily="Montserrat-Regular"
                fontSize="18px"
                color={theme.palette.secondary[100]}
                fontWeight="600"
                textAlign="center"
                sx={{ mb: "5px" }}
              >
                Share:
              </Typography>
              <IconButton component="a" href="https://twitter.com">
                <Twitter
                  sx={{
                    color: theme.palette.primary[500],
                    fontSize: "28px"
                  }}
                ></Twitter>
              </IconButton>
              <IconButton component="a" href="https://www.facebook.com">
                <FacebookIcon
                  sx={{
                    color: theme.palette.primary[500],
                    fontSize: "28px"
                  }}
                ></FacebookIcon>
              </IconButton>
              <IconButton component="a" href="https://www.linkedin.com">
                <LinkedInIcon
                  sx={{
                    color: theme.palette.primary[500],
                    fontSize: "28px"
                  }}
                ></LinkedInIcon>
              </IconButton>
            </Box>
            <Box mt="2rem" sx={{ height: "2rem" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="Scrolling Button Navbar"
                sx={{ display: { xs: "none", md: "flex" } }}
              >
                {navItems.map(({ text, url, icon }, index) => (
                  <Tab
                    key={index}
                    label={text}
                    sx={{
                      color: "#222",
                      indicator: "#222",
                      textTransform: "revert",
                      fontSize: "18px",
                      fontWeight: "bold",
                      fontFamily: "Montserrat-Regular"
                    }}
                    component={Link}
                    to={url}
                    icon={icon}
                  ></Tab>
                ))}
              </Tabs>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
