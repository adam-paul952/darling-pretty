import React from "react";

import { Link } from "react-router-dom";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Close } from "@mui/icons-material";

interface IMobileHeaderDrawerProps {
  navLinks: INavLinks[];
  handleDrawerToggle: () => void;
}

interface INavLinks {
  linkText: string;
  navLink: string;
}

const MobileHeaderDrawer = (props: IMobileHeaderDrawerProps) => {
  const { navLinks, handleDrawerToggle } = props;
  return (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "#000", height: "100%" }}
    >
      <List>
        <IconButton onClick={handleDrawerToggle}>
          <Close sx={{ color: "#FFF" }} />
        </IconButton>
        <Divider />
        {navLinks.map((item: any) => (
          <ListItem
            key={item.linkText}
            disablePadding
            sx={{ justifyContent: "center" }}
          >
            <ListItemButton
              component={Link}
              to={item.navLink}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.linkText} sx={{ color: "#fff" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MobileHeaderDrawer;
