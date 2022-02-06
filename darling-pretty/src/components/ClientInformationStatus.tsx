import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { GrCheckmark } from "react-icons/gr";

interface Props {
  title: string;
  complete?: boolean;
}

const ClientInformationStatus: React.FC<Props> = ({ title, complete }) => {
  return (
    <>
      <Container
        style={{
          backgroundColor: "grey",
        }}
      >
        <Row>
          <Col>{title}</Col>
          <Col>
            <GrCheckmark />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ClientInformationStatus;
