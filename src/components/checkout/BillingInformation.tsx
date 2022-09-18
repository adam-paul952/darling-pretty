import React from "react";

import {
  IconButton,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import { IClientInfoProps } from "./ContactInformation";
import { formatPostalCode } from "../../util/formatStrings";
import CancelIcon from "@mui/icons-material/Cancel";

const BillingInformation: React.FC<IClientInfoProps> = (props) => {
  const {
    addressOne,
    addressTwo,
    city,
    postalCode,
    // province,
    // country
  } = props.newClient;

  const [error, setError] = React.useState<boolean>(false);

  const textError = (input: string) => {
    // if (input.length >= 0 && input.length <= 7) {
    //   return false;
    // }
    if (input.length === 0) return;
    const test =
      /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ](\s)?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i.test(
        input
      );
    console.log(test);

    if (test === false) setError(true);
    else setError(false);

    // if (
    //   !postalCode.match(

    //   )
    // ) {
    //   return true;
    // } else return false;
    // return true;
  };

  return (
    <>
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
              props.setNewClient((prev) => ({
                ...prev,
                addressOne: e.target.value,
              }));
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
              props.setNewClient((prev) => ({
                ...prev,
                addressTwo: e.target.value,
              }));
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
              props.setNewClient((prev) => ({
                ...prev,
                city: e.target.value,
              }));
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
              props.setNewClient((prev) => ({
                ...prev,
                postalCode: formatPostalCode(e.target.value),
              }));
              textError(e.target.value);
            }}
            inputProps={{ maxLength: 7 }}
            error={error}
            helperText={error ? "Invalid postal code format" : ""}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      props.setNewClient((prev) => ({
                        ...prev,
                        postalCode: "",
                      }));
                      setError(false);
                    }}
                    edge="end"
                    sx={{ visibility: postalCode ? "visible" : "hidden" }}
                  >
                    <CancelIcon />
                  </IconButton>
                </InputAdornment>
              ),
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
    </>
  );
};

export default BillingInformation;
