import React from "react";

import { Link } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import TableTitle from "./TableTitle";
import NoInfoAvailable from "./NoInfoAvailable";
import { IClientInfo } from "../../hooks/useClientInfo";

const RecentClients = ({ clients }: { clients: IClientInfo[] }) => {
  return (
    <>
      {clients.length === 0 ? (
        <NoInfoAvailable variant="clients" />
      ) : (
        <>
          <TableTitle>Recent Clients</TableTitle>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Session Booked</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client: IClientInfo) => (
                <TableRow key={client.id}>
                  <TableCell>
                    {client.firstName} {client.lastName}
                  </TableCell>
                  <TableCell>{client.sessionBooked}</TableCell>
                  <TableCell>{client.phoneNumber}</TableCell>
                  <TableCell>{client.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            variant="text"
            component={Link}
            to="/admin/clients"
            sx={{
              mt: 3,
              color: "#000",
              justifyContent: "flex-start",
              width: "25%",
              pl: 5,
              textDecoration: "underline",
              "&:hover": {
                color: "#000",
              },
            }}
          >
            See All Clients
          </Button>
        </>
      )}
    </>
  );
};

export default RecentClients;
