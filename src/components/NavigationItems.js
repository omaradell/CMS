import React from "react";
import Table from "react-bootstrap/Table";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";
import { GoArrowSmallDown } from "react-icons/go";

function NavigationItems(props) {
  const tableRow = (
    <tr style={{ backgroundColor: "#FCFCFC" }}>
      <td className=" ">
        <Row className=" p-4"> {props.pagename}</Row>
        <Row className=" p-1" style={{ backgroundColor: "#fdf7e7" }}>
          <p><GoArrowSmallDown></GoArrowSmallDown> {props.pagename}</p> 
        </Row>
        <Row className=" p-4" style={{ backgroundColor: "#fefcf5" }}>
          {props.pagename}
        </Row>
      </td>
      <td className="">
        <Row className=" p-3">{props.menutab}</Row>
        <Row className=" p-3" style={{ backgroundColor: "#fdf7e7" }}>
          {props.menutab}
        </Row>
        <Row className=" p-3" style={{ backgroundColor: "#fefcf5" }}>
          {props.menutab}
        </Row>
      </td>
      <td className="">
        <Row className=" p-3">
          <a href="https://example.com/faq.html" rel="noreferrer">
            {props.url}
          </a>
        </Row>
        <Row className=" p-3" style={{ backgroundColor: "#fdf7e7" }}>
          <a href="https://example.com/faq.html" rel="noreferrer">
            {props.url}
          </a>
        </Row>{" "}
        <Row className=" p-3" style={{ backgroundColor: "#fefcf5" }}>
          <a href="https://example.com/faq.html" rel="noreferrer">
            {props.url}
          </a>
        </Row>
      </td>
      <td width="">
        <Row className="py-2">
          <Form>
            {["radio"].map((type) => (
              <div
                key={`default-${type}`}
                className=" d-inline-flex justify-content-center"
              >
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="Same Window"
                  checked
                />
                &nbsp;
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="New Window"
                />
              </div>
            ))}
          </Form>
        </Row>
        <Row className="py-3" style={{ backgroundColor: "#fdf7e7" }}>
          <Form>
            {["radio"].map((type) => (
              <div
                key={`default-${type}`}
                className=" d-inline-flex justify-content-center"
              >
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="Same Window"
                  checked
                />
                &nbsp;
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="New Window"
                />
              </div>
            ))}
          </Form>
        </Row>{" "}
        <Row className="py-3" style={{ backgroundColor: "#fefcf5" }}>
          <Form>
            {["radio"].map((type) => (
              <div
                key={`default-${type}`}
                className=" d-inline-flex justify-content-center"
              >
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="Same Window"
                  checked
                />
                &nbsp;
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label="New Window"
                />
              </div>
            ))}
          </Form>
        </Row>{" "}
      </td>
      <td className="">
        <Row className=" p-3">{props.order}</Row>
        <Row className=" p-3" style={{ backgroundColor: "#fdf7e7" }}>
          {props.order}
        </Row>
        <Row className=" p-3" style={{ backgroundColor: "#fefcf5" }}>
          {props.order}
        </Row>
      </td>
      <td className="">
        <Row className=" p-3">
          <div class="form-check form-switch d-flex align-items-center">
            <input
              class="form-check-input "
              type="checkbox"
              role="switch"
              id="active"
              style={{ transform: "scale(1.5)" }}
            />

            <small
              class="form-check-label px-3 "
              for="active"
              id="active"
            ></small>
            <label for="active">Active</label>
          </div>
        </Row>
        <Row className=" p-3" style={{ backgroundColor: "#fdf7e7" }}>
          <div class="form-check form-switch d-flex align-items-center">
            <input
              class="form-check-input "
              type="checkbox"
              role="switch"
              id="active"
              style={{ transform: "scale(1.5)" }}
            />

            <small
              class="form-check-label px-3 "
              for="active"
              id="active"
            ></small>
            <label for="active">Active</label>
          </div>
        </Row>
        <Row className=" p-3" style={{ backgroundColor: "#fefcf5" }}>
          <div class="form-check form-switch d-flex align-items-center">
            <input
              class="form-check-input "
              type="checkbox"
              role="switch"
              id="active"
              style={{ transform: "scale(1.5)" }}
            />

            <small
              class="form-check-label px-3 "
              for="active"
              id="active"
            ></small>
            <label for="active">Active</label>
          </div>
        </Row>
      </td>
      <td className="">
        {" "}
        <Row className=" p-2">
          <Col className=" d-inline-flex justify-content-center">
            <Button variant="outline-warning" className="m-auto rounded-pill">
              <FiEdit2 />
            </Button>{" "}
            <Button variant="outline-danger" className="m-auto rounded-pill">
              <RiDeleteBin6Line className="" />
            </Button>{" "}
          </Col>
        </Row>
        <Row className=" p-2" style={{ backgroundColor: "#fdf7e7" }}>
          <Col
            className=" d-inline-flex justify-content-center"
            
          >
            <Button variant="outline-warning" className="m-auto rounded-pill">
              <FiEdit2 />
            </Button>{" "}
            <Button variant="outline-danger" className="m-auto rounded-pill">
              <RiDeleteBin6Line className="" />
            </Button>{" "}
          </Col>
        </Row>
        <Row className=" p-2" >
          <Col
            className=" d-inline-flex justify-content-center"
            style={{ backgroundColor: "#fefcf5" }}
          >
            <Button variant="outline-warning" className="m-auto rounded-pill">
              <FiEdit2 />
            </Button>{" "}
            <Button variant="outline-danger" className="m-auto rounded-pill">
              <RiDeleteBin6Line className="" />
            </Button>{" "}
          </Col>
        </Row>
      </td>{" "}
    </tr>
  );
  return (
    <div>
      <Container fluid>
        <Table responsive="sm" className="" borderless>
          <thead>
            <tr>
              <th width="250">Page Name</th>
              <th>Menu Tab</th>
              <th>URL</th>
              <th>Appearance</th>
              <th>Order</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {Array(5)
              .fill(0)
              .map(() => tableRow)}
          </thead>
          <tbody></tbody>
        </Table>
      </Container>
    </div>
  );
}

export default NavigationItems;
