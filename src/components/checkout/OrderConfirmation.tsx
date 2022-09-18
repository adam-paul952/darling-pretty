import React from "react";

import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const OrderConfirmation = ({ orderId }: { orderId: string }) => {
  return (
    <Box sx={{ marginBottom: "139px" }}>
      <Typography variant="h5" gutterBottom>
        Thank you for your order.
      </Typography>
      <Typography variant="subtitle1">
        Your order number is {orderId}. We have emailed your order confirmation,
        and will send you an update when your order has shipped.
      </Typography>
      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          mt: 3,
          ml: 1,
          fontSize: "14px",
          "&:hover": {
            color: "white",
            backgroundColor: "darkblue",
          },
          backgroundColor: "#000",
        }}
      >
        Return to Darling Pretty Home
      </Button>
    </Box>
  );
};

export default OrderConfirmation;
