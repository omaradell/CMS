import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col } from "react-bootstrap";

export default function Categories(props) {
  return (
    <>
      <Row>
        <Col>
          <Card.Title>Categories</Card.Title>
          <Button variant="success">New Category</Button>{" "}
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
      <Row className="p-3">
        <Card style={{ width: "18rem" }}>
          <Col>
            <Row className="p-3 d-flex justify-content-center">
              <Card.Img
                variant="top"
                src="./image1.png"
                style={{ width: "30%" }}
                class="card-img-top"
              />
            </Row>
            <Col className="d-flex p-4">
              <Card.Body>
                <Card.Title class="text-center">{props.pagename}</Card.Title>
                <Card.Text class="text-center">{props.appearance}</Card.Text>
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
                  <Button
                    variant="primary"
                    className="rounded-circle p-1 m-1"
                    size="sm"
                  >
                    Add
                  </Button>
                </Col>
              </Card.Body>
            </Col>
          </Col>
        </Card>
      </Row>
    </>
  );
}
