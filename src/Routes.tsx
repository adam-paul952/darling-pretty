import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DarlingPrettyHome from "./App";
import SessionDescriptionContainer from "./screens/SessionDescriptionContainer";
import ContactForm from "./screens/Contact";
import Checkout from "./screens/Checkout";
const SessionCalendar = lazy(() => import("./admin/SessionCalendar"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));
const CreateSessionScreen = lazy(() => import("./admin/CreateSession"));
import LoginPage from "./screens/Login";
const ContactFormSubmissions = lazy(
  () => import("./admin/ContactFormSubmissions")
);
const DisplayClients = lazy(() => import("./admin/DisplayClients"));
import DisplayAvailableSessions from "./screens/DisplaySessionsContainer";
import NotFound from "./screens/NotFound";

const DarlingPrettyRouter = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<DarlingPrettyHome />} />
          <Route path="/sessions" element={<DisplayAvailableSessions />} />
          <Route path="/photo/:id" element={<SessionDescriptionContainer />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/calendar" element={<SessionCalendar />} />
          <Route
            path="/admin/createsession"
            element={<CreateSessionScreen />}
          />
          <Route
            path="/admin/contactform"
            element={<ContactFormSubmissions />}
          />
          <Route path="/admin/clients" element={<DisplayClients />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default DarlingPrettyRouter;
