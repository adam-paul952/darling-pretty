import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <>
      <Button>Clients</Button>
      <Button>
        <Link className="buttonLink" to="/admin/calendar">
          Calendar
        </Link>
      </Button>
      <Button>
        <Link className="buttonLink" to="/admin/editsession">
          Edit Session Info
        </Link>
      </Button>
    </>
  );
};

export default AdminDashboard;
