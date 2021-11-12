import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, Col, Form, Row } from "react-bootstrap";

const LoginInformation = ({ clientInfo, setClientInfo }) => {
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { email, password } = clientInfo;
  return (
    <>
      <h2 className="m-3">Login Information</h2>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    login: {
                      ...prevState.login,
                      email: e.target.value,
                    },
                  }));
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setClientInfo((prevState) => ({
                    ...prevState,
                    login: {
                      ...prevState.login,
                      password: e.target.value,
                    },
                  }));
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="passwordConfirm">
              <Form.Label>Password Confirm</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={passwordConfirm}
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button className="mt-3 centerButton">Next: Personal Information</Button>
    </>
  );
};

export default LoginInformation;

LoginInformation.propTypes = {
  clientInfo: PropTypes.object.isRequired,
  setClientInfo: PropTypes.func.isRequired,
};
