import React from "react";
import { Container } from "react-bootstrap";

interface IBackground {
  children: React.ReactElement;
}

const Background: React.FC<IBackground> = ({ children }) => {
  return (
    <>
      <Container fluid aria-label="background" className="background">
        {children}
      </Container>
    </>
  );
};

export default Background;
