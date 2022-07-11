import React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const drawerWidth = 240;
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
        <Divider />
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link href={item.url}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.route} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        paddingBottom: "70px",
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
            minHeight: { sm: "64px", md: "76px" },
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
              <MenuIcon />
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
                  component="a"
                  href={item.url}
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
