import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { GrCheckmark } from "react-icons/gr";

interface IClientInfoStatusProps {
  title: string;
  complete?: boolean;
}

const ClientInformationStatus: React.FC<IClientInfoStatusProps> = ({
  title,
  complete,
}) => {
  return (
    <>
      <Container
        style={{
          backgroundColor: "lightgrey",
        }}
      >
        <Row>
          <Col>
            <h2>{title}</h2>
          </Col>
          <Col>
            <GrCheckmark />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClientInformationStatus;
