import React from "react";

import { Grid, TextField, Typography } from "@mui/material";

import { IClientInfoProps } from "./ContactInformation";

const BillingInformation: React.FC<IClientInfoProps> = (props) => {
  const {
    addressOne,
    addressTwo,
    city,
    postalCode,
    // province,
    // country
  } = props.newClient;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            placeholder="1234 Main St"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={addressOne}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setNewClient({
                ...props.newClient,
                addressOne: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            placeholder="Apartment, studio, or floor"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={addressTwo!}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setNewClient({
                ...props.newClient,
                addressTwo: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.setNewClient({
                ...props.newClient,
                city: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="province"
            name="province"
            label="Province"
            defaultValue="Newfoundland and Labrador"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="postalCode"
            name="postalCode"
            label="Postal code"
            placeholder="A1A 1A1"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={postalCode}
            onChange={(e: any) => {
              props.setNewClient({
                ...props.newClient,
                postalCode: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            disabled
            id="country"
            label="Country"
            defaultValue="Canada"
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default BillingInformation;
