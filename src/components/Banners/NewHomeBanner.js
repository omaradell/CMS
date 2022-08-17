import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import UploadBanner from "./UploadBanner";

function NewHomeBanner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row>
        <h2 className="p-3" > Add/Edit Banner</h2>
        <Col xs={12} md={8}>
          <Card>
            <Row className="d-flex justify-content-center p-3 ">
              <Card className=" rounded-3 " style={{ backgroundColor : "#f4f3f3" , width : "50rem"}}>
                <Card.Title className="d-flex justify-content-lg-center py-5">
                  {" "}
                  <UploadBanner />{" "}
                </Card.Title>
              </Card>
            </Row>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label class=" p-2 fw-bold">Image title</Form.Label>
                <Form.Control placeholder="title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label class="p-2 fw-bold">Image URL</Form.Label>
                <Form.Control placeholder="URL" />
              </Form.Group>
              <Row>
                <Col className="d-flex  justify-content-start">
                  <Button variant="primary" type="submit" className="m-2 px-5" size="lg">
                    Publish
                  </Button>
                  <Button variant="outline-secondary" type="cancel" className="m-2 px-5" size="lg">
                    Delete
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
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

export default NewHomeBanner;
