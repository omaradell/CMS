import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Nav, Tabs, Tab, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { AiOutlineFilter } from "react-icons/ai";

export default function AddPage() {
  return (
    <>
      {/* <Container> */}
      <Row>
        <h2 className="p-3"> Add Home Page Banner</h2>
        <Col xs={12} md={8}>
          <div>
            {/* <Container fluid className="w-100"> */}
            <style>{"body { background-color: #FCFCFC; }"}</style>
            <Card className="rounded">
              <Tabs className="w-100">
                <Tab eventKey="first" title="Content" className="w-100">
                  <Row className="w-100">
                    <Col className=" p-3">
                      <Row md={6}>
                        <Card.Title className="m-3 d-flex  justify-content-center align-items-center">
                          Page Name
                        </Card.Title>
                        <Card.Body className="m-1 d-flex  justify-content align-items-center">
                          <Col>
                            <a
                              href="https://example.com/faq.html"
                              rel="noreferrer"
                            >
                              www.google.com{" "}
                            </a>
                          </Col>
                          <Col>
                            <Button
                              variant="outline-warning"
                              className="m-1 d-flex  justify-content-end align-items-center"
                            >
                              Edit
                            </Button>{" "}
                          </Col>
                        </Card.Body>
                      </Row>
                      <Row>
                        <Col>
                          <InputGroup className="p-4 w-100">
                            <Form.Control
                              as="textarea"
                              placeholder="Home Page Content Here ..."
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="p-3 m-3">
                          <Button variant="primary" className="px-5">
                            Publish
                          </Button>{" "}
                          <Button variant="secondary" className="px-5">
                            Delete
                          </Button>{" "}
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="" title="Meta"></Tab>
                <Tab eventKey="" title="SEO"></Tab>
              </Tabs>
            </Card>

            {/* </Container> */}
          </div>
        </Col>
        <Col>
          <Card class="rounded" style={{ width: "19rem" }}>
            <Card.Body>
              <h5>Order</h5>

              <InputGroup className="mb-3" style={{ width: "100%" }}>
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                  variant="light"
                  title=""
                  placeholder="Public"
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
              <h5>Visibility</h5>

              <InputGroup className="mb-3" style={{ width: "100%" }}>
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                  variant="light"
                  title=""
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">1</Dropdown.Item>
                  <Dropdown.Item href="#">2</Dropdown.Item>
                  <Dropdown.Item href="#">3</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">3</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
              <h5>Published Date</h5>
              <Form.Group className="p-2" controlId="formGridEmail">
                {/* <Form.Label class="p-1 fw-bold">Published Date</Form.Label> */}
                <Form.Control type="date" placeholder="Enter Publish Date " />
              </Form.Group>
              <h5>Published time</h5>
              <Form.Group className="p-2" controlId="formGridEmail">
                {/* <Form.Label class="p-1 fw-bold">Published Date</Form.Label> */}
                <Form.Control type="time" placeholder="Enter Publish Date " />
              </Form.Group>
              <Row>
                <Col>
                  <h5>Editor</h5>
                  <Card
                    border="secondary"
                    style={{ height: "50px" }}
                    className="p-1 d-flex  justify-content-center align-items-center"
                  >
                    <Card.Title>Mohamed Ali</Card.Title>
                  </Card>
                </Col>
              </Row>
              <Row>
                <h5 className="p-2">Tags</h5>

                <Col className="p-2">
                  <Button
                    style={{ backgroundColor: "#ebf3fc" }}
                    variant="info"
                    type=""
                    className="m-1 rounded-pill"
                  >
                    Products ×
                  </Button>{" "}
                  <Button
                    style={{ backgroundColor: "#ebf3fc" }}
                    variant="info"
                    type=""
                    className="m-1 rounded-pill"
                  >
                    Materials ×
                  </Button>{" "}
                  <Button
                    variant="primary"
                    type=""
                    size="sm"
                    className=" m-1 rounded-circle btn-circle"
                  >
                    +
                  </Button>
                </Col>
              </Row>
              <Row className=" d-inline-flex justify-content-end">
                <Form.Group controlId="formGridPassword">
                  <Col className="p-2 d-inline-flex justify-content-start">
                    <h5>Status</h5>
                  </Col>
                  <Col className="px-5 d-inline-flex justify-content-end">
                    <div className="d-inline-flex justify-content-end form-check form-switch">
                      <input
                        className=" form-check-input d-inline-flex justify-content-end"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        toggle
                      />
                      <label
                        class="px-2 form-check-label d-inline-flex justify-content-end"
                        for="flexSwitchCheckChecked"
                      >
                        Active{" "}
                      </label>
                    </div>
                  </Col>
                </Form.Group>
              </Row>

              <Row>
                <Col className="d-flex  justify-content-center">
                  <Button
                    variant="outline-secondary"
                    type="cancel"
                    className="m-auto"
                  >
                    Save Draft
                  </Button>
                  <Button
                    variant="outline-primary"
                    type="submit"
                    className="m-auto"
                  >
                    Preview
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
