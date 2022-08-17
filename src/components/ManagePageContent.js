import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col, Container } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";


export default function ManagePageContent() {
  return (
    <>
      <Container>
        <style>{"body { background-color: #f4f3f3; }"}</style>{" "}
        <Row>
          <Row>
            <p style={{ fontSize: "30px" }} className="m-3">
              Manage Page Content
            </p>
            <Card>
              <Card.Body className="d-flex justify-content-end ">
                <Col>
                  <Button
                    variant="success"
                    className="px-5"
                    style={{ backgroundColor: "#0bc528" }}
                  >
                    New Tab
                  </Button>{" "}
                  <Button
                    variant="info"
                    className="px-5"
                    style={{
                      margin: "0px 0px 0px 5px",
                      backgroundColor: "#5c9fe7",
                      color: "white",
                    }}
                  >
                    Export File{" "}
                  </Button>{" "}
                </Col>
                <Col className="d-flex justify-content-end ">
                  <InputGroup className="">
                    <Form.Control
                      // className="d-flex justify-content-end"
                      // style={{q
                      //   width: "50%",
                      // }}

                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="warning" id="button-addon2">
                      <AiOutlineSearch />
                    </Button>
                  </InputGroup>
                </Col>
              </Card.Body>
            </Card>
          </Row>
        </Row>
      </Container>
    </>
  );
}
