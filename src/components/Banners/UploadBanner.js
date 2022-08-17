import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function UploadBanner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-secondary" className="p-5" size="lg" onClick={handleShow}>
        Upload Banner
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col className="d-flex  justify-content-center p-5">
                <Card.Img
                  variant="top"
                  src="./image1.png"
                  style={{ width: "30%" }}
                  class="card-img-top"
                />{" "}
              </Col>
            </Row>

            <Row>
              <Col className="d-flex  justify-content-center p-5">
                <Form.Range />
              </Col>
            </Row>
            <Row>
              <Col className="d-flex  justify-content-center">
                <Button variant="primary" className="m-1">
                  Rotate
                </Button>{" "}
                <Button variant="primary" className="m-1">
                  Crop
                </Button>{" "}
                <Button variant="primary" className="m-1">
                  Contrast
                </Button>{" "}
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
