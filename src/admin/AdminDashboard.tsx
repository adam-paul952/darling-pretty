import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import TailwindCSSButton from "../components/visual/TailwindCSSButton";

const AdminDashboard = () => {
  return (
    <div className="container flex flex-row justify-center items-center h-screen">
      <TailwindCSSButton buttonTitle="Clients" onClick={() => {}} />
      <Link to="/admin/calendar">
        <TailwindCSSButton buttonTitle="Calendar" onClick={() => {}} />
      </Link>
      <Link className="buttonLink" to="/admin/createsession">
        <TailwindCSSButton buttonTitle="Create Session" onClick={() => {}} />
      </Link>
      <Link className="buttonLink" to="/admin/editsession">
        <TailwindCSSButton buttonTitle="Edit Session Info" onClick={() => {}} />
      </Link>
    </div>
  );
};

export default AdminDashboard;
