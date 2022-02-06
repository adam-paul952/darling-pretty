import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <>
      <Button>Clients</Button>
      <Button>
        <Link to="/admin/calendar">Session</Link>
      </Button>
      <Button>
        <Link to="">Edit Session Info</Link>
      </Button>
    </>
  );
};

export default AdminDashboard;
