import Nav from "react-bootstrap/Nav";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";

export default function Blogs(props) {
  return (
    <Container fluid>
      <style>{"body { background-color: #f4f3f3; }"}</style>{" "}
      <Row>
        <p style={{ fontSize: "30px" }} className="m-3">
          Blog Posts Managment
        </p>
        <Row className=" d-inline-flex justify-content ">
          <Card
            className="d-inline-flex justify-content "
            sytly={{ width: "100%" }}
          >
            <Card.Body className="d-flex justify-content-end ">
              <Col className=" d-inline-flex justify-content-start align-items-center">
                <Col className=" d-inline-flex justify-content-start align-items-center">
                  {" "}
                  <Row className="d-inline-flex justify-content-start align-items-center">
                    <Form.Group
                      className=" d-inline-flex justify-content-start align-items-center"
                      controlId=""
                    >
                      <Form.Label className="px-3">Post date</Form.Label>
                      <Form.Control
                        type="date"
                        className="d-inline-flex justify-content-start"
                        placeholder="Enter Publish Date "
                      />
                    </Form.Group>{" "}
                  </Row>
                </Col>
                <Col>
                  <Button
                    variant="warning"
                    className="px-4"
                    // className="d-inline-flex align-items-center"

                    style={{
                      color: "white",
                    }}
                  >
                    Apply Filter
                  </Button>{" "}
                </Col>
              </Col>
              <Col className=" d-inline-flex justify-content-end align-items-center">
                <Col className=" d-inline-flex justify-content-end align-items-center">
                  <Button
                    variant="info"
                    className="px-4 m-1"
                    style={{
                      margin: "0px 0px 0px 5px",
                      backgroundColor: "#5c9fe7",
                      color: "white",
                    }}
                    // className="px-5 d-inline-flex justify-content-end "
                  >
                    Export File{" "}
                  </Button>{" "}
                  <Button
                    variant="success"
                    className="px-4 m-1"
                    // style={{
                    //   margin: "0px 0px 0px 5px",
                    //   backgroundColor: "#5c9fe7",
                    //   color: "white",
                    // }}
                  >
                    Add New{" "}
                  </Button>{" "}
                  <InputGroup>
                    <Form.Control
                      // className="px-4"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="warning" id="button-addon2">
                      <AiOutlineSearch />
                    </Button>
                  </InputGroup>
                </Col>
              </Col>
            </Card.Body>
          </Card>
        </Row>
      </Row>
    </Container>
  );
}
// className="px-5 d-inline-flex justify-content-end "
