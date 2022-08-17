import Nav from "react-bootstrap/Nav";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";

export default function Blogs(props) {
  return (
    <>
      <Container fluid>
        <h2 className="p-3">Blog Posts Managment</h2>
        <Row>
          <Col>
            <div
              type="text"
              className="d-inline-flex justify-content-start text-center m-1"
            >
              Post Date{" "}
            </div>
            <Form.Control
              type="date"
              name="date_of_birth"
              style={{ width: "150px" }}
            />
            <Button variant="warning" className="m-1">
              Apply Filter{" "}
            </Button>{" "}
          </Col>
          <Col className="d-flex justify-content-end ">
            <Button variant="success" style={{ margin: "0px 0px 0px 5px" }}>
              New Post{" "}
            </Button>{" "}
            <Button variant="info" style={{ margin: "0px 0px 0px 5px" }}>
              Export File{" "}
            </Button>{" "}
          </Col>
          <Col className="d-inline-flex justify-content-end">
            <InputGroup>
              <Form.Control
                style={{
                  width: "4rem",
                }}
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
      </Container>
    </>
  );
}
