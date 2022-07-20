import React from "react";

import { Link } from "react-router-dom";
import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  Badge,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Mail, Menu } from "@mui/icons-material";

import { IDashboardChildrenProps } from "../AdminDashboard";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DashboardHeader = (props: IDashboardChildrenProps) => {
  const { open, toggleDrawer, unreadMessages } = props;

  return (
    <AppBar position="absolute" open={open} sx={{ backgroundColor: "#000" }}>
      <Toolbar
        sx={{
          pr: "24px", // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <Menu />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Dashboard
        </Typography>
        <IconButton
          component={Link}
          to="/admin/contactform"
          color="inherit"
          sx={{
            transition: "all 0.2s ease-in-out",
            "&:hover": { color: "inherit", transform: "scale(1.05)" },
          }}
        >
          <Badge
            badgeContent={unreadMessages ? unreadMessages : 0}
            color="secondary"
          >
            <Mail />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardHeader;
