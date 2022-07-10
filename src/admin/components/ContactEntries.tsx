import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import useContactForm, { IContactFormProps } from "../../hooks/useContactForm";

interface IContactEntriesProps {
  contactEntries: IContactFormProps[];
}

const ContactEntries: React.FC<IContactEntriesProps> = (props) => {
  const { contactEntries } = props;

  const { deleteContactFormSubmission } = useContactForm();

  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const emailSubject = `Response to Inquiry from Darling Pretty Photography`;

  const removeEntry = async (id: string) => {
    await deleteContactFormSubmission(id);
  };

  return (
    <>
      {contactEntries.map((entry) => {
        return (
          <Accordion
            key={entry.id}
            expanded={expanded === `panel${entry.id}`}
            onChange={handleChange(`panel${entry.id}`)}
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
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${entry.id}bh-content`}
              id={`panel${entry.id}bh-header`}
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                {entry.name}
              </Typography>
              <Typography sx={{ color: "text.secondary" }}>
                {entry.email}
              </Typography>
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
                    endIcon={<SendIcon />}
                    href={`mailto:${entry.email}?subject=${emailSubject}`}
                  >
                    Reply
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
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
