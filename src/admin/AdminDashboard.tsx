import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Button className="mx-2">Clients</Button>
      <Button className="mx-2">
        <Link className="buttonLink" to="/admin/calendar">
          Calendar
        </Link>
      </Button>
      <Button className="mx-2">
        <Link className="buttonLink" to="/admin/createsession">
          Create Session
        </Link>
      </Button>
      <Button className="mx-2">
        <Link className="buttonLink" to="/admin/editsession">
          Edit Session Info
        </Link>
      </Button>
    </Container>
  );
};

export default AdminDashboard;
