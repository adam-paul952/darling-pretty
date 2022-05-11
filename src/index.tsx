import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import DarlingPrettyRouter from "./Routes";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
// import Background from "./components/Background";

ReactDOM.render(
  <React.StrictMode>
    {/* <Background> */}
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: "CAD",
      }}
    >
      <DarlingPrettyRouter />
    </PayPalScriptProvider>
    {/* </Background> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
