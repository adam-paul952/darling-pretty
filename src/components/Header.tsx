import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export interface HeaderProps {
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
          <Navbar.Brand href="/">{props.title}</Navbar.Brand>
          <Nav className="d-flex flex-row bd-highlight">
            <NavDropdown
              className="px-3"
              title="Products"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="/">
                Darling Pretty Photography
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin/dashboard">
                Log in
              </NavDropdown.Item>
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
