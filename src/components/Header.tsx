import React from "react";

import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import useContentful from "../hooks/useContentful";
import MobileHeaderDrawer from "./MobileHeaderDrawer";
import { headerQuery } from "../util/contentfulQuery";

const drawerWidth = 200;

const Header: React.FC = () => {
  const { data, loading } = useContentful(headerQuery);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const trigger = useScrollTrigger({
    target: window,
  });

  if (loading) return null;

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
              {data.headerCollection?.items[0].name}
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {data.headerCollection?.items[0].navLinksCollection.items.map(
                (item: any) => (
                  <Button
                    component={Link}
                    to={item.navLink}
                    key={item.linkText}
                    sx={{ color: "#fff" }}
                  >
                    {item.linkText}
                  </Button>
                )
              )}
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
          <MobileHeaderDrawer
            navLinks={data.headerCollection?.items[0].navLinksCollection.items}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
