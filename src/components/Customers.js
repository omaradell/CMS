import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";

export default function Customers(props) {
  return (
    <div>
      <Card.Title className="p-1"> Customers</Card.Title>
      <Card.Title className="p-1"> Top Customers</Card.Title>

      <Card className="m-4" style={{ width: "25rem" }}>
        <Row>
          <Col className="d-inline-flex justify-content-center mx-3">
            <Card.Img
              variant="top"
              src="./image1.png"
              style={{ width: "30%", height: "60%" }}
              class="card-img-top p-2 bd-highlight"
              //   className=""
            />
          </Col>

          {/* <Col className="d-inline-flex justify-content-end">
            <Button
              className="p-1"
              variant="warning"
              style={{ width: "60px", height: "30px" }}
              disabled
            >
              5.0
            </Button>
          </Col> */}
        </Row>
        <Row class="d-flex justify-content-center">
          <Col class="d-flex justify-content-center">
            <Card.Title>Hello </Card.Title>
          </Col>
        </Row>
        <Row class="d-flex justify-content-center">
          <Col class="d-flex justify-content-center">
            <Card.Text>World</Card.Text>
          </Col>
        </Row>
        <hr></hr>
        <Row class="d-flex justify-content-center p-1">
          <Col class="d-flex justify-content-center">
            <Button
              className="p-1"
              variant="primary"
              //   style={{ width: "60px", height: "30px" }}
            >
              Send Comment
            </Button>
          </Col>
        </Row>
      </Card>
      <Row className="d-flex justify-content-start p-3">
        <Col>
          <Button variant="warning" className="m-1">
            Apply Filter{" "}
          </Button>{" "}
          <Button variant="info" style={{ margin: "0px 0px 0px 5px" }}>
            Export File{" "}
          </Button>{" "}
        </Col>
      </Row>
      <Row style={{ width: "100%" }} className="d-inline-flex justify-content">
        <Col >
          <div type="text">Date </div>
          <Form.Control
            type="date"
            name="date_of_birth"
            // style={{ width: "150px" }}
          />
        </Col>
        <Col>
          <div type="text">First Name </div>
          <InputGroup
            style={{ width: "150px" }}
          >
            <Form.Control aria-label="Text input with dropdown button" />
          </InputGroup>
        </Col>
        <Col>
          <div type="text">Last Name </div>
          <InputGroup style={{ width: "150px" }}>
            <Form.Control aria-label="Text input with dropdown button" />
          </InputGroup>
        </Col>
        <Col className="d-inline-flex justify-content-center align-items-center">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              toggle
            />
            <label class="form-check-label" for="flexSwitchCheckChecked">
              subuscribe{" "}
            </label>
          </div>{" "}
        </Col>
        <Col className="d-inline-flex justify-content-center align-items-center">
          <Button variant="warning" className="m-1">
            Apply Filter{" "}
          </Button>{" "}
        </Col>
        <Col className="d-inline-flex justify-content-center align-items-center">
          <InputGroup>
            <Form.Control
              // style={{
              //   width: "4rem",
              // }}
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
              ch
            />
            <Button variant="outline-secondary" id="button-addon2">
              S
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
}
