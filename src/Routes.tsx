import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import useAuthContext from './context/AuthContext'

import SuspenseWrapper from "./skeletonScreens/SuspenseWrapper";
import NotFound from "./screens/NotFound";

import PublicRoute from "./components/PublicRoute";
import DarlingPrettyHome from "./App";
import SessionDescriptionContainer from "./screens/SessionDescriptionContainer";
import ContactForm from "./screens/Contact";
import Checkout from "./screens/Checkout";
import DisplayAvailableSessions from "./screens/DisplaySessionsContainer";
import LoginPage from "./screens/Login";

import ProtectedRoute from "./components/ProtectedRoute";

const DarlingPrettyRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<PublicRoute />}>
          <Route path="/" element={<DarlingPrettyHome />} />
          <Route path="sessions" element={<DisplayAvailableSessions />} />
          <Route path="photo/:id" element={<SessionDescriptionContainer />} />
          <Route path="contact" element={<ContactForm />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route
            path="dashboard"
            element={<SuspenseWrapper path="admin/AdminDashboard" />}
          />
          <Route
            path="calendar"
            element={<SuspenseWrapper path="admin/SessionCalendar" />}
          />
          <Route
            path="createsession"
            element={<SuspenseWrapper path="admin/CreateSession" />}
          />
          <Route
            path="contactform"
            element={<SuspenseWrapper path="admin/ContactFormSubmissions" />}
          />
          <Route
            path="clients"
            element={<SuspenseWrapper path="admin/DisplayClients" />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default DarlingPrettyRouter;

// TODO: Suspense fallback component for skeleton loading screens
