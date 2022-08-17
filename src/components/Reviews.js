import Nav from "react-bootstrap/Nav";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";

export default function Reviews(props) {
  return (
    <>
            <h2> Reviews </h2>

      <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Total rated suppliers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Least rated suppliers</Nav.Link>
        </Nav.Item>
      </Nav>
      <Container fluid>
        <Card className="m-4" style={{ width: "25rem" }}>
          <Row className="d-inline-flex p-3">
            <Col className="d-flex">
              <Card.Img
                variant="top"
                src="./image1.png"
                // style={{ width: "50px", height: "30%" }}
                class="card-img-top p-2 bd-highlight"
              />
            </Col>
            <Col>
              <Card.Title>{props.pagename}</Card.Title>
              <Card.Text>{props.appearance}</Card.Text>
            </Col>
            <Col className="d-inline-flex justify-content-end">
              <Button
                className="p-1"
                variant="warning"
                style={{ width: "60px", height: "30px" }}
                disabled
              >
                5.0
              </Button>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <div
              type="text"
              className="d-inline-flex justify-content-start  mx-3 my-1 p-3"
            >
              3% Sales Last Week
            </div>
          </Row>
        </Card>
        <Row > 
          <Col>
            <div
              type="text"
              className="d-inline-flex justify-content-start text-center m-1"
            >
              Date{" "}
            </div>
            <Form.Control
              type="date"
              name="date_of_birth"
              style={{ width: "150px" }}
            />
          </Col>
          <Col>
            <div
              type="text"
              className="d-inline-flex justify-content-start text-center m-1"
            >
              Rate{" "}
            </div>
            <InputGroup
              className="d-inline-flex justify-content-start text-center m-1"
              style={{ width: "150px" }}
            >
              <Form.Control aria-label="Text input with dropdown button" />

              <DropdownButton
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">1</Dropdown.Item>
                <Dropdown.Item href="#">2</Dropdown.Item>
                <Dropdown.Item href="#">3</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">4</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col>
            <div type="text" className="d-inline-flex justify-content-start">
              Suppliers{" "}
            </div>
            <InputGroup
              className="d-inline-flex justify-content"
              style={{ width: "150px" }}
            >
              <Form.Control aria-label="Text input with dropdown button" />

              <DropdownButton
                variant="outline-secondary"
                title=""
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">1</Dropdown.Item>
                <Dropdown.Item href="#">2</Dropdown.Item>
                <Dropdown.Item href="#">3</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">4</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>
          <Col className="d-flex justify-content-start ">
            <Button variant="warning" className="m-1">
              Apply Filter{" "}
            </Button>{" "}
            <Button variant="info" style={{ margin: "0px 0px 0px 5px" }}>
              Export File{" "}
            </Button>{" "}
          </Col>
          <Col className="d-inline-flex justify-content-end">
            <InputGroup >
              <Form.Control
                style={{
                  width : "4rem"
                }}
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
                ch
              />
              <Button variant="outline-secondary" id="button-addon2" >
                S
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
