import React from "react";

import { Button, Typography } from "@mui/material";

const OrderConfirmation = ({ orderId }: { orderId: string }) => {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is {orderId}. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
      <Button component="a" href="/" variant="contained" sx={{ mt: 3, ml: 1 }}>
        Return to Darling Pretty Home
      </Button>
    </React.Fragment>
  );
};

export default OrderConfirmation;
