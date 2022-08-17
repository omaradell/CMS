import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Row , Col} from "react-bootstrap";

export default function Header() {
  return (
    <Row>
      <Col>
          <h2 className="flex-inline m-3">Logo</h2>
      </Col>
      <Col className="d-flex justify-content-end ">
        <InputGroup className="m-3 ">
          <Form.Control
            style={{
              width: "50%",
            }}
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
  );
}
