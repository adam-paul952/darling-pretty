import React, { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import useAuthContext from './context/AuthContext'

import NotFound from "./screens/NotFound";

import PublicRoute from "./components/PublicRoute";
import DarlingPrettyHome from "./App";
import SessionDescriptionContainer from "./screens/SessionDescriptionContainer";
import ContactForm from "./screens/Contact";
import Checkout from "./screens/Checkout";
import DisplayAvailableSessions from "./screens/DisplaySessionsContainer";
import LoginPage from "./screens/Login";

import ProtectedRoute from "./components/ProtectedRoute";
const SessionCalendar = lazy(() => import("./admin/SessionCalendar"));
// import AdminDashboard from "./admin/AdminDashboard";
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));
const CreateSessionScreen = lazy(() => import("./admin/CreateSession"));
const ContactFormSubmissions = lazy(
  () => import("./admin/ContactFormSubmissions")
);
const DisplayClients = lazy(() => import("./admin/DisplayClients"));

const DarlingPrettyRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<PublicRoute />}>
            <Route path="/" element={<DarlingPrettyHome />} />
            <Route path="sessions" element={<DisplayAvailableSessions />} />
            <Route path="photo/:id" element={<SessionDescriptionContainer />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="calendar" element={<SessionCalendar />} />
            <Route path="createsession" element={<CreateSessionScreen />} />
            <Route path="contactform" element={<ContactFormSubmissions />} />
            <Route path="clients" element={<DisplayClients />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default DarlingPrettyRouter;
