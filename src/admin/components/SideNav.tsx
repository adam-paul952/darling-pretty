import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Nav } from "react-bootstrap";

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
      <Nav.Link href="/admin/dashboard">Overview</Nav.Link>
      <Nav.Link href="/admin/calendar">Calendar</Nav.Link>
      <Nav.Link href="/admin/createsession">Add Session</Nav.Link>
      <Nav.Link href="/admin/contactform">Contact Form Entries</Nav.Link>
    </Nav>
  );
};

export default SideNav;
