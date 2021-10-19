import Header from "../components/Header";
import { Card, CardGroup, Container, Row } from "react-bootstrap";

const DarlingPrettyHome = () => {
  return (
    <>
      <Header title="Darling Pretty Photography" />
      <Container className="mt-3">
        <ShowAvailablePhotos />
      </Container>
    </>
  );
};

const ShowAvailablePhotos = () => {
  return (
    <>
      <Row>
        <CardGroup>
          <Card>
            <Card.Link href="/darling_pretty_photodesc">
              <Card.Img variant="top" src="darling-pretty1.jpg" />
            </Card.Link>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Date</Card.Text>
              <hr />
              <Card.Text>$XXX.xx</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Link href="#pictureDescription">
              <Card.Img variant="top" src="darling-pretty1.jpg" />
            </Card.Link>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Date</Card.Text>
              <hr />
              <Card.Text>$XXX.xx</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
      <Row>
        <CardGroup>
          <Card>
            <Card.Link href="#pictureDescription">
              <Card.Img variant="top" src="darling-pretty1.jpg" />
            </Card.Link>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Date</Card.Text>
              <hr />
              <Card.Text>$XXX.xx</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Link href="#pictureDescription">
              <Card.Img variant="top" src="darling-pretty1.jpg" />
            </Card.Link>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Date</Card.Text>
              <hr />
              <Card.Text>$XXX.xx</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Row>
    </>
  );
};

export default DarlingPrettyHome;
