import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";
import DarlingPrettyRouter from "./Routes";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: "gainsboro" },
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: "CAD",
      }}
    >
      <CssBaseline />
      <DarlingPrettyRouter />
    </PayPalScriptProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
