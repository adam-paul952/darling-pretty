import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <Nav defaultActiveKey="#section" className={"sidebar active"}>
      <ol>
        <li>
          <Nav.Link as={Link} to="/admin/dashboard">
            Overview
          </Nav.Link>
        </li>
        <li>
          <Nav.Link as={Link} to="/admin/calendar">
            Calendar
          </Nav.Link>
        </li>
        <li>
          <Nav.Link
            as={Link}
            to="/admin/createsession"
            state={{ sessionId: null }}
          >
            Add Session
          </Nav.Link>
        </li>
        <li>
          <Nav.Link as={Link} to="/admin/contactform">
            Contact Form Entries
          </Nav.Link>
        </li>
      </ol>
    </Nav>
  );
};

export default SideNav;
