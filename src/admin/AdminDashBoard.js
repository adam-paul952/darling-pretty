import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <>
      <Button>Clients</Button>

      <Button as={Link} to="/admin/calendar">
        Sessions
      </Button>
      <Link to="/admin/editsession">
        <Button>Edit Session Info</Button>
      </Link>
    </>
  );
};

export default AdminDashboard;
