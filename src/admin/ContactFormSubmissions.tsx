import React from "react";

import SideNav from "../admin/components/SideNav";
import ContactEntries from "./components/ContactEntries";

import Box from "@mui/material/Box";
import DashboardHeader from "./components/DashboardHeader";
import Typography from "@mui/material/Typography";

import useContactForm, { IContactFormProps } from "../hooks/useContactForm";

const ContactFormSubmissions = () => {
  const { getContactFormSubmissions } = useContactForm();

  const [contactEntries, setContactEntries] = React.useState<
    IContactFormProps[]
  >([]);
  const [unreadMessage, setUnread] = React.useState<number>(0);

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  React.useEffect(
    () => {
      const getContactSubmissions = async () => {
        const contactSubmissions = await getContactFormSubmissions();
        contactSubmissions.forEach(
          (message: IContactFormProps) =>
            message.read === false && setUnread((prev) => prev + 1)
        );
        setContactEntries(contactSubmissions);
      };

      getContactSubmissions();
    },
    //eslint-disable-next-line
    []
  );

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <DashboardHeader
          open={open}
          toggleDrawer={toggleDrawer}
          unreadMessages={unreadMessage}
        />
        <SideNav open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Typography
            component="h2"
            sx={{
              textAlign: "center",
              padding: "20px",
              fontSize: "28px",
              marginTop: "60px",
            }}
          >
            Contact Entries
          </Typography>
          {contactEntries.length > 0 ? (
            <ContactEntries contactEntries={contactEntries} />
          ) : (
            <Box>
              <Typography
                component="h2"
                sx={{ textAlign: "center", padding: "20px", fontSize: "28px" }}
              >
                No submissions
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default ContactFormSubmissions;

/*
 * TODO:
 * Add subscription to re-render after delete or create submission with page open
 */
