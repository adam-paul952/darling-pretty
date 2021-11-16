import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";

const ProtectedRoute = ({ component, ...args }) => {
  return (
    <Route
      component={withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
      })}
      {...args}
    />
  );
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  component: PropTypes.func,
  args: PropTypes.object,
};