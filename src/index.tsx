import React from "react";
import ReactDOM from "react-dom";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./App.css";

import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";

import DarlingPrettyRouter from "./Routes";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { AuthProvider } from "./context/AuthContext";
import { SessionProvider } from "./context/SessionContext";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

declare module "@mui/material/styles" {
  export interface BreakpointOverrides {
    xxl: true;
  }
}

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { height: "100vh" },
        body: { backgroundColor: "gainsboro", minHeight: "100%" },
        "#root": { minHeight: "100vh" },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1700,
    },
  },
});

ReactDOM.render(
  <SessionProvider>
    <AuthProvider>
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
      </ThemeProvider>
    </AuthProvider>
  </SessionProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
