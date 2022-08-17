import React, { Component } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

export default class CustomersProfileOrders extends Component {
  render() {
    return (
      <Container fluid>
        <Card className="shadow-lg">
          <Container fluid>
            <Row className="border border-2 border-success p-5">
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
            </Row>
          </Container>
        </Card>
      </Container>
    );
  }
}
