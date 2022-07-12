import React, { Suspense } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import DashboardHeader from "../admin/components/DashboardHeader";
import SideNav from "../admin/components/SideNav";
import { useAuthContext } from "../context/AuthContext";
import Box from "@mui/material/Box";

import useContactForm from "../hooks/useContactForm";

const ProtectedRoute: React.FC = () => {
  const { unreadMessage } = useContactForm();
  const { authState } = useAuthContext();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return authState === true ? (
    <Box sx={{ display: "flex" }}>
      <DashboardHeader
        open={open}
        toggleDrawer={toggleDrawer}
        unreadMessages={unreadMessage}
      />
      <SideNav open={open} toggleDrawer={toggleDrawer} />
      <Outlet />
    </Box>
  ) : (
    <Navigate to="/login" replace state={{ pathname: location.pathname }} />
  );
};

export default ProtectedRoute;
