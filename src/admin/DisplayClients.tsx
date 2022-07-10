import React from "react";
import SideNav from "./components/SideNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Link from "@mui/material/Link";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardHeader from "./components/DashboardHeader";

import useClientInfo, { IClientInfo } from "../hooks/useClientInfo";

const DisplayClients = () => {
  const { getAllClients } = useClientInfo();

  const [clientInfo, setClientInfo] = React.useState<IClientInfo[]>([]);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

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
    <Box sx={{ display: "flex" }}>
      <DashboardHeader open={open} toggleDrawer={toggleDrawer} />
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
          sx={{ textAlign: "center", padding: "20px", fontSize: "28px" }}
        >
          All Clients
        </Typography>
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
                expandIcon={<ExpandMoreIcon />}
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
      </Box>
    </Box>
  );
};

export default DisplayClients;
