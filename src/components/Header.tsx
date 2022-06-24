import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import image from "../images/darling-pretty1.jpg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import { headerStyles } from "../styles/styles";

export interface HeaderProps {
  title: string;
}

const drawerWidth = 240;
export const navItems = [
  { id: 1, route: "Home", url: "/" },
  { id: 2, route: "Log In", url: "/admin/dashboard" },
  { id: 3, route: "Contact", url: "/contact" },
];

// const { toolBar, logo, link } = headerStyles;

const Header: React.FC<any> = (props) => {
  // const classes = useCl
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const trigger = useScrollTrigger({
    target: window,
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
        <Divider />
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <Link href={item.url}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.route} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        paddingBottom: "70px",
        backgroundColor: "#000",
      }}
    >
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar
          position="fixed"
          component="nav"
          sx={{
            backgroundColor: "#000",
            boxShadow: "none",
            minHeight: { sm: "64px", md: "76px" },
          }}
        >
          <Toolbar classes={toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" }, color: "#fff" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              // classes={logo}
              component="div"
              sx={{ flexGrow: 1, display: { sm: "block" }, color: "#fff" }}
            >
              Darling Pretty Photography
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  component="a"
                  href={item.url}
                  key={item.id}
                  sx={{ color: "#fff" }}
                >
                  {item.route}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Slide>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              // paddingTop: { xs: "25%" },
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

// const Header = (props: HeaderProps) => {
//   return (
//     <>
//       <Navbar
//         sticky="top"
//         collapseOnSelect
//         expand="lg"
//         style={{ backgroundColor: "transparent" }}
//       >
//         <Container>
//           <Navbar.Toggle />
//           <Navbar.Collapse className="justify-content-center">
//             <Nav className="d-flex flex-row bd-highlight">
//               <Nav.Link
//                 href="/"
//                 style={{ margin: "5px 15px", padding: "0 15px" }}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 href="/admin/dashboard"
//                 style={{ margin: "5px 15px", padding: "0 15px" }}
//               >
//                 Log in
//               </Nav.Link>
//               <Nav.Link
//                 href="/contact"
//                 style={{ margin: "5px 15px", padding: "0 15px" }}
//               >
//                 Contact
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

export default Header;

const styles = {
  toolBar: {
    height: "10vh",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "white",
  },
  logo: {
    color: "blue",
    cursor: "pointer",
  },
  link: {
    color: "#000",
  },
  menuIcon: {
    color: "#000",
  },
};
