import React from "react";
import PropTypes from "prop-types";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap/";

import AuthenticationButton from "./AuthenticationButton";

const Header = ({ title }) => {
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>{title}</Navbar.Brand>
          <Nav className="d-flex flex-row bd-highlight">
            <NavDropdown
              className="px-3"
              title="Products"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/darling_pretty_photo">
                Darling Pretty Photography
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/pawparazzi_photo">
                Pawparazzi Photography
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="px-3" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="px-3" href="/order/checkout">
              Checkout
            </Nav.Link>
          </Nav>
          <AuthenticationButton />
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

Header.propTypes = {
  title: PropTypes.string,
};
