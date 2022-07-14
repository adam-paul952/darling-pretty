import React from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Link,
  Paper,
  Typography,
} from "@mui/material";

import { ExpandMore } from "@mui/icons-material";

import useClientInfo, { IClientInfo } from "../hooks/useClientInfo";
import NoInfoAvailable from "./components/NoInfoAvailable";

const DisplayClients = () => {
  const { getAllClients } = useClientInfo();

  const [clientInfo, setClientInfo] = React.useState<IClientInfo[]>([]);
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  React.useEffect(() => {
    const fetchClientInfo = async () => {
      const clients = await getAllClients();
      setClientInfo(clients);
    };

    fetchClientInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
          marginTop: { md: "65px" },
        }}
      >
        <Typography
          component="h2"
          sx={{ textAlign: "center", padding: "20px", fontSize: "28px" }}
        >
          All Clients
        </Typography>
        {clientInfo.length === 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Paper sx={{ width: "90%", p: 2 }}>
              <NoInfoAvailable variant="clients" />
            </Paper>
          </Box>
        ) : (
          <>
            {clientInfo.map((client) => {
              return (
                <Accordion
                  key={client.id}
                  expanded={expanded === `panel${client.id}`}
                  onChange={handleChange(`panel${client.id}`)}
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
                    aria-controls={`panel${client.id}bh-content`}
                    id={`panel${client.id}bh-header`}
                  >
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      {client.firstName} {client.lastName}
                    </Typography>
                    <Typography sx={{ color: "text.secondary" }}>
                      {client.sessionBooked}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        padding: "10px",
                        width: "60%",
                      }}
                    >
                      <Box>
                        <Typography>
                          Phone Number:&nbsp;
                          <Link
                            href={`tel:${client.phoneNumber}`}
                            sx={{ "&:hover": { cursor: "pointer" } }}
                          >
                            {client.phoneNumber}
                          </Link>
                        </Typography>
                        <Typography sx={{ padding: "10px 0px" }}>
                          Email:&nbsp;
                          <Link
                            href={`mailto:${client.email}`}
                            sx={{ "&:hover": { cursor: "pointer" } }}
                          >
                            {client.email}
                          </Link>
                        </Typography>
                      </Box>
                      <Typography sx={{ padding: "0px 30px" }}>
                        Mailing Address:
                      </Typography>
                      <Typography sx={{ padding: "0px 30px" }}>
                        {client.addressOne}
                        <br />
                        {client.addressTwo}
                        <br />
                        {client.city}
                        <br />
                        {client.province}, {client.country}
                        <br />
                        {client.postalCode}
                        <br />
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </>
        )}
      </Box>
    </>
  );
};

export default DisplayClients;
