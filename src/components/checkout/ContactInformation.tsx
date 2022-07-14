import React from "react";

import { Grid, TextField, Typography } from "@mui/material";

import { IClientInfo } from "../../hooks/useClientInfo";

import { formatPhoneNumber } from "../../util/formatStrings";

export interface IClientInfoProps {
  newClient: IClientInfo;
  setNewClient: React.Dispatch<React.SetStateAction<IClientInfo>>;
}

const ClientInformation: React.FC<IClientInfoProps> = (props) => {
  const { firstName, lastName, email, phoneNumber } = props.newClient;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Contact Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            placeholder="John"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={firstName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setNewClient({
                ...props.newClient,
                firstName: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            placeholder="Doe"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setNewClient({
                ...props.newClient,
                lastName: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="E-mail Address"
            placeholder="john.doe@email.com"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setNewClient({
                ...props.newClient,
                email: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            placeholder="(709)123-4567"
            fullWidth
            variant="standard"
            value={phoneNumber}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setNewClient({
                ...props.newClient,
                phoneNumber: formatPhoneNumber(e.target.value),
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ClientInformation;
