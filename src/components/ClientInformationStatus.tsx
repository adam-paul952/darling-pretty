import React from "react";
import { Col, Row } from "react-bootstrap";
import { GrCheckmark } from "react-icons/gr";

interface IClientInfoStatusProps {
  title: string;
  complete?: boolean;
}

const ClientInformationStatus: React.FC<IClientInfoStatusProps> = (props) => {
  return (
    <Row lg={2} className="my-5 info-complete">
      <Col>
        <h2 className="info-complete-text">{props.title}</h2>
      </Col>
      <Col>
        <GrCheckmark />
      </Col>
    </Row>
  );
};

export default ClientInformationStatus;
