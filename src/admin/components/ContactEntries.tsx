import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { Delete, ExpandMore, Send } from "@mui/icons-material";

import useContactForm, { IContactFormProps } from "../../hooks/useContactForm";

interface IContactEntriesProps {
  contactEntries: IContactFormProps[];
  setContactEntries: any;
}

const ContactEntries: React.FC<IContactEntriesProps> = (props) => {
  const { contactEntries, setContactEntries } = props;

  const { deleteContactFormSubmission, updateMessageReadStatus } =
    useContactForm();

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string, id: string) =>
    async (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);

      if (expanded === panel) {
        await updateMessageReadStatus(id);
        setContactEntries((prev: any) =>
          prev.map((entry: any) => {
            if (entry.id === id) {
              entry.read = true;
            }
            return entry;
          })
        );
      }
    };

  const emailSubject = `Response to Inquiry from Darling Pretty Photography`;

  const removeEntry = async (id: string) => {
    await deleteContactFormSubmission(id);
  };

  React.useEffect(() => {
    console.log(contactEntries);
  }, [contactEntries]);

  return (
    <>
      {contactEntries.map((entry) => {
        return (
          <Accordion
            key={entry.id}
            expanded={expanded === `panel${entry.id}`}
            onChange={handleChange(`panel${entry.id}`, entry.id!)}
            sx={{
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
              "&.Mui-expanded": {
                width: "95%",
                marginLeft: "auto",
                marginRight: "auto",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls={`panel${entry.id}bh-content`}
              id={`panel${entry.id}bh-header`}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {entry.name}
              </Typography>
              <Typography
                sx={{ width: "33%", flexShrink: 0, color: "text.secondary" }}
              >
                {entry.email}
              </Typography>
              {entry.read === false ? (
                <Badge
                  badgeContent={1}
                  color="secondary"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  sx={{ marginBottom: "10px" }}
                />
              ) : null}
            </AccordionSummary>
            <AccordionDetails>
              <Box component="div" sx={{}}>
                <Box>
                  <Typography>Subject: {entry.subject}</Typography>
                  <Typography sx={{ padding: "10px 0px" }}>
                    Message: {entry.message}
                  </Typography>
                </Box>
                <Stack
                  direction="row"
                  spacing={10}
                  sx={{ justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    endIcon={<Send />}
                    href={`mailto:${entry.email}?subject=${emailSubject}`}
                  >
                    Reply
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<Delete />}
                    onClick={() => removeEntry(entry.id!)}
                    disabled
                  >
                    Delete
                  </Button>
                </Stack>
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default ContactEntries;
