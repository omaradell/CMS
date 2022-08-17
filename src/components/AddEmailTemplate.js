import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

export default function AddEmailTemplate() {
  return (
    <div>
        <h2> Add/Edit Email Template</h2>
      <Col>
        <Card>
          <Card.Body>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Image title</Form.Label>
              <Form.Control placeholder="title" />
            </Form.Group>

            <Row>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Template Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Row>
            <Row>
              <Col className="d-flex  justify-content-center">
                <Button variant="primary" type="submit" className="m-auto">
                  Publish
                </Button>
                <Button variant="secondary" type="cancel" className="m-auto">
                  Delete
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
