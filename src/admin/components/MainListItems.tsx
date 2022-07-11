import React from "react";
import { useLocation, Link } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const MainListItems = () => {
  const { pathname } = useLocation();

  return (
    <>
      <ListItemButton
        component="a"
        href="/admin/dashboard"
        disabled={pathname === "/admin/dashboard" ? true : false}
        sx={
          pathname === "/admin/dashboard"
            ? { backgroundColor: "black", "&.Mui-disabled": { opacity: 1 } }
            : {}
        }
      >
        <ListItemIcon>
          <DashboardIcon
            sx={pathname === "/admin/dashboard" ? { color: "white" } : {}}
          />
        </ListItemIcon>
        <ListItemText primary="Overview" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="/admin/clients"
        disabled={pathname === "/admin/clients" ? true : false}
        sx={
          pathname === "/admin/clients"
            ? { backgroundColor: "black", "&.Mui-disabled": { opacity: 1 } }
            : {}
        }
      >
        <ListItemIcon>
          <PeopleIcon
            sx={pathname === "/admin/clients" ? { color: "white" } : {}}
          />
        </ListItemIcon>
        <ListItemText primary="Clients" />
      </ListItemButton>
      <ListItemButton
        component="a"
        href="/admin/calendar"
        disabled={pathname === "/admin/calendar" ? true : false}
        sx={
          pathname === "/admin/calendar"
            ? { backgroundColor: "black", "&.Mui-disabled": { opacity: 1 } }
            : {}
        }
      >
        <ListItemIcon>
          <CalendarMonthIcon
            sx={pathname === "/admin/calendar" ? { color: "white" } : {}}
          />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItemButton>
      <ListItemButton
        component={Link}
        to="/admin/createsession"
        state={{ sessionId: null }}
        disabled={pathname === "/admin/createsession" ? true : false}
        sx={
          pathname === "/admin/createsession"
            ? { backgroundColor: "black", "&.Mui-disabled": { opacity: 1 } }
            : {}
        }
      >
        <ListItemIcon>
          <AddBoxIcon
            sx={pathname === "/admin/createsession" ? { color: "white" } : {}}
          />
        </ListItemIcon>
        <ListItemText primary="Create Session" />
      </ListItemButton>
    </>
  );
};
