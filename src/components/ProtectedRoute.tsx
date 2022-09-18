import React, { Suspense } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { useAuthContext } from "../context/AuthContext";
import DashboardHeader from "../admin/components/DashboardHeader";
import SideNav from "../admin/components/SideNav";
import useContactForm from "../hooks/useContactForm";
import Loading from "./Loading";

const ProtectedRoute: React.FC = () => {
  const { unreadMessage } = useContactForm();
  const { authState } = useAuthContext();

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
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </Box>
  ) : (
    <Navigate to="/login" replace state={{ pathname: "/admin/dashboard" }} />
  );
};

export default ProtectedRoute;
