import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col, Container } from "react-bootstrap";

export default function Email(props) {
  return (
    <>
      <Row className="m-auto">
        <Col>
          <Card.Title>Email Template Design</Card.Title>
          <Button variant="success">New Email</Button>{" "}
          <Button variant="info" style={{ margin: "0px 0px 0px 5px" }}>
            Export File{" "}
          </Button>{" "}
        </Col>
        <Col className="d-flex justify-content-end ">
          <InputGroup className="mb-3">
            <Form.Control
              className="d-flex justify-content-end "
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              ch
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Card style={{ width: "20rem" }} className="m-auto">
        <Container >
          <Row className="p-3 ">
            <Col ClassName="d-inline-flex justify-content-center text-center">
              <Row>
                <Col>
                  <Card.Header>Thank You Email Template</Card.Header>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex p-4">
              <Card.Body>
                <Card.Title class="text-center">{props.pagename}</Card.Title>
                <Card.Text class="text-center">{props.appearance}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
          <Row>
            <Button variant="success" className="" size="sm">
              Our Products
            </Button>
          </Row>
          <Row>
            <Row>
              <Col className="p-3 d-flex justify-content-center">
                <Button
                  variant="success"
                  className="rounded-circle p-1 m-1"
                  size="sm"
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  className="rounded-circle p-1 m-1"
                  size="sm"
                >
                  del
                </Button>
              </Col>
            </Row>
          </Row>
        </Container>
      </Card>
    </>
  );
}
