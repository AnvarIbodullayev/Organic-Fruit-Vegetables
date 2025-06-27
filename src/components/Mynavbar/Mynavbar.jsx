import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Typography,
  Link,
  IconButton,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logoImage from "../../assets/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["About Us", "Service", "Menu", "Contact"];

function Mynavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        color="default"
        sx={{ boxShadow: 0, bgcolor: "background.paper", py: 2 }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Mobile Menu Button (Visible on xs, hidden on md+) */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseMenu}>
                  <Link
                    href={`#${page.toLowerCase()}`}
                    underline="none"
                    color="inherit"
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Links (Hidden on mobile) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {pages.map((page) => (
              <Link
                key={page}
                href={`#${page.toLowerCase()}`}
                color="inherit"
                underline="none"
              >
                {page}
              </Link>
            ))}
          </Box>

          {/* Center Logo */}
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: { xs: "none", sm: "block" }, // Hide on very small screens if needed
            }}
          >
            <img src={logoImage} alt="" />
          </Typography>

          {/* Right Button */}
          <Box sx={{ display: { sm: "flex" }, gap: 2 }}>
            <IconButton color="success">
              <SearchIcon />
            </IconButton>
            <IconButton color="success">
              <ShoppingCartIcon />
            </IconButton>
            <Button color="success" variant="contained">
              Regestar Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Mynavbar;
