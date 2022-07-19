import React from "react";

import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  // Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Close, Menu } from "@mui/icons-material";

const drawerWidth = 200;
export const navItems = [
  { id: 1, route: "Home", url: "/" },
  { id: 2, route: "Log In", url: "/login" },
  { id: 3, route: "Contact", url: "/contact" },
];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const trigger = useScrollTrigger({
    target: window,
  });

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#000", height: "100%" }}
    >
      <List>
        <IconButton onClick={handleDrawerToggle}>
          <Close sx={{ color: "#FFF" }} />
        </IconButton>
        <Divider />
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            sx={{ justifyContent: "center" }}
          >
            {/* <Link href={item.url} sx={{ textDecoration: "none" }}> */}
            <ListItemButton
              component={Link}
              to={item.url}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.route} sx={{ color: "#fff" }} />
            </ListItemButton>
            {/* </Link> */}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#000",
      }}
    >
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          component="nav"
          sx={{
            backgroundColor: "#000",
            boxShadow: "none",
            // minHeight: { sm: "64px", md: "76px" },
          }}
        >
          <Toolbar classes={toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#fff" }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { sm: "block" }, color: "#fff" }}
            >
              Darling Pretty Photography
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  component={Link}
                  to={item.url}
                  key={item.id}
                  sx={{ color: "#fff" }}
                >
                  {item.route}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
