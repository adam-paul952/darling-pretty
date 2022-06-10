import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

interface ISideNavProps {}

const SideNav = (props: ISideNavProps) => {
  const [sidebar, setSidebar] = React.useState<boolean>(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Nav
      defaultActiveKey="#section"
      className={sidebar ? "sidebar active" : "sidebar"}
    >
      <Button className="hamburger" onClick={showSidebar}>
        <div></div>
      </Button>
      <ol>
        <li>
          <Nav.Link href="/admin/dashboard">Overview</Nav.Link>
        </li>
        <li>
          <Nav.Link href="/admin/calendar">Calendar</Nav.Link>
        </li>
        <li>
          {/* <Nav.Link href="/admin/createsession">Add Session</Nav.Link> */}
          <Link
            className="nav-link"
            to="/admin/createsession"
            state={{ sessionId: null }}
          >
            Add Session
          </Link>
        </li>
        <li>
          <Nav.Link href="/admin/contactform">Contact Form Entries</Nav.Link>
        </li>
      </ol>
    </Nav>
  );
};

export default SideNav;