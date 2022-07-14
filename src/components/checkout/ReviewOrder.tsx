import React from "react";

import { List, ListItem, ListItemText, Grid, Typography } from "@mui/material";

const ReviewOrder = ({ order, client }: { order: any; client: any }) => {
  const { price, name, date } = order;
  const {
    firstName,
    lastName,
    addressOne,
    city,
    province,
    country,
    postalCode,
  } = client;

  const clientName = `${firstName} ${lastName}`;
  const clientAddress = `${addressOne} ${city} ${province} ${country} ${postalCode}`;

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary={name} secondary={date} />
          <Typography variant="body2">{price}</Typography>
        </ListItem>
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total due:" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {price}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{clientName}</Typography>
          <Typography gutterBottom>{clientAddress}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ReviewOrder;
