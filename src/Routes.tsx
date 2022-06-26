import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DarlingPrettyHome from "./App";
import SessionDescriptionContainer from "./screens/SessionDescriptionContainer";
import ContactForm from "./screens/Contact";
import Checkout from "./screens/Checkout";
import SessionCalendar from "./admin/SessionCalendar";
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));
import CreateSessionScreen from "./admin/CreateSession";
import LoginPage from "./screens/Login";
import ContactFormSubmissions from "./admin/ContactFormSubmissions";
import DisplayClients from "./admin/DisplayClients";
import DisplayAvailableSessions from "./screens/DisplaySessionsContainer";

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
        </Routes>
      </Suspense>
    </Router>
  );
};

export default DarlingPrettyRouter;
