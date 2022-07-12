import React from "react";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
          <Link color="primary" href="/admin/clients" sx={{ mt: 3 }}>
            See All Clients
          </Link>
        </>
      )}
    </>
  );
};

export default RecentClients;
