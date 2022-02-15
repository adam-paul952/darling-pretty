import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

interface HeaderProps {
  title: string;
}

const Header = (props: HeaderProps) => {
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
          <Navbar.Brand>{props.title}</Navbar.Brand>
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
            </NavDropdown>
            <Nav.Link className="px-3" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
