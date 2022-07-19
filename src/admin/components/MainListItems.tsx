import React from "react";

import { useLocation, Link } from "react-router-dom";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import {
  AddBox,
  CalendarMonth,
  Dashboard,
  Home,
  People,
} from "@mui/icons-material";

export const MainListItems = () => {
  const { pathname } = useLocation();

  return (
    <>
      <ListItemButton
        component={Link}
        to="/admin/dashboard"
        disabled={pathname === "/admin/dashboard" ? true : false}
        sx={
          pathname === "/admin/dashboard"
            ? {
                backgroundColor: "black",
                "&.Mui-disabled": { opacity: 1 },
              }
            : { "&:hover": { color: "#000" } }
        }
      >
        <ListItemIcon>
          <Dashboard
            sx={pathname === "/admin/dashboard" ? { color: "white" } : {}}
          />
        </ListItemIcon>
        <ListItemText
          primary="Overview"
          sx={pathname === "/admin/dashboard" ? { color: "white" } : {}}
        />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/admin/clients"
        disabled={pathname === "/admin/clients" ? true : false}
        sx={
          pathname === "/admin/clients"
            ? { backgroundColor: "black", "&.Mui-disabled": { opacity: 1 } }
            : { "&:hover": { color: "#000" } }
        }
      >
        <ListItemIcon>
          <People
            sx={pathname === "/admin/clients" ? { color: "white" } : {}}
          />
        </ListItemIcon>
        <ListItemText
          primary="Clients"
          sx={pathname === "/admin/clients" ? { color: "white" } : {}}
        />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/admin/calendar"
        disabled={pathname === "/admin/calendar" ? true : false}
        sx={
          pathname === "/admin/calendar"
            ? { backgroundColor: "black", "&.Mui-disabled": { opacity: 1 } }
            : { "&:hover": { color: "#000" } }
        }
      >
        <ListItemIcon>
          <CalendarMonth
            sx={pathname === "/admin/calendar" ? { color: "white" } : {}}
          />
        </ListItemIcon>
        <ListItemText
          primary="Calendar"
          sx={pathname === "/admin/calendar" ? { color: "white" } : {}}
        />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/admin/createsession"
        state={{ sessionId: null }}
        disabled={pathname === "/admin/createsession" ? true : false}
        sx={
          pathname === "/admin/createsession"
            ? { backgroundColor: "black", "&.Mui-disabled": { opacity: 1 } }
            : { "&:hover": { color: "#000" } }
        }
      >
        <ListItemIcon>
          <AddBox
            sx={pathname === "/admin/createsession" ? { color: "white" } : {}}
          />
        </ListItemIcon>
        <ListItemText
          primary="Create Session"
          sx={pathname === "/admin/createsession" ? { color: "white" } : {}}
        />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/"
        sx={{ "&:hover": { color: "#000" }, mt: 10 }}
      >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Darling Pretty Home" />
      </ListItemButton>
    </>
  );
};
