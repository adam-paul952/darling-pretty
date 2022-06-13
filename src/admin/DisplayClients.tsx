import React from "react";
import SideNav from "./components/SideNav";
import useAWSDatastore, { IClientInfo } from "../hooks/useAWSData";
import { Accordion, Col, Row } from "react-bootstrap";

const DisplayClients = () => {
  const { listAllClients } = useAWSDatastore();
  const [clientInfo, setClientInfo] = React.useState<IClientInfo[]>([]);

  React.useEffect(() => {
    const fetchClientInfo = async () => {
      const clients = await listAllClients();
      console.log(clients);
      setClientInfo(clients);
    };

    fetchClientInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <SideNav />
      <div className="dashboard-container">
        <h2 className="text-center">All Clients</h2>
        <Accordion>
          {clientInfo.map((client: any) => {
            return (
              <Accordion.Item key={client.id} eventKey={client.id}>
                <Accordion.Header>
                  <Row style={{ width: "100%" }}>
                    <Col style={{ marginLeft: "15%" }}>
                      <p>
                        {client.firstName} {client.lastName}
                      </p>
                    </Col>
                    <Col>
                      <p>{client.sessionBooked}</p>
                    </Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body>
                  <Row>
                    <Col className="text-center">
                      <p>
                        <a href={`tel:${client.phoneNumber}`}>
                          {client.phoneNumber}
                        </a>
                      </p>
                    </Col>
                    <Col>
                      <p>
                        <a href={`mailto:${client.email}`}>{client.email}</a>
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <p>Mailing Address:</p>
                    </Col>
                    <Col>
                      <p style={{ margin: "5px" }}>{client.addressOne}</p>
                      <p style={{ margin: "5px" }}>{client.addressTwo}</p>
                      <p style={{ margin: "5px" }}>{client.city}</p>
                      <p style={{ margin: "5px" }}>
                        {client.province}, {client.country}
                      </p>
                      <p style={{ margin: "5px" }}>{client.postalCode}</p>
                    </Col>
                  </Row>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
    </>
  );
};

export default DisplayClients;
