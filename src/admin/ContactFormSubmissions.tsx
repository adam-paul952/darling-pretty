import React from "react";

import { Box, Paper, Typography } from "@mui/material";

import ContactEntries from "./components/ContactEntries";
import useContactForm from "../hooks/useContactForm";
import NoInfoAvailable from "./components/NoInfoAvailable";

const ContactFormSubmissions = () => {
  const { contactEntries, setContactEntries } = useContactForm();

  return (
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
        <ContactEntries
          contactEntries={contactEntries}
          setContactEntries={setContactEntries}
        />
      ) : (
        <Box>
          <Paper sx={{ p: 2 }}>
            <NoInfoAvailable variant="contact submissions" />
          </Paper>
        </Box>
      )}
    </Box>
  );
};

export default ContactFormSubmissions;

/*
 * TODO:
 * Add subscription to re-render after delete or create submission with page open
 */
