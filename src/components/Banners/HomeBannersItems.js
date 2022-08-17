import React from "react";
import Table from "react-bootstrap/Table";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function HomeBannerItems(props) {
  const tableRow = (
    <tr style={{ backgroundColor: "#FCFCFC" }}>
      <td>
        <Image
          style={{ width: "5rem", height: "4rem" }}
          src="https://cdn.iconscout.com/icon/free/png-256/sheet-93369.png"
        />
      </td>
      <td>{props.menutab}</td>
      <td>
        <a href="https://example.com/faq.html" rel="noreferrer">
          www.google.com{" "}
        </a>
      </td>
      <td>{props.appearance}</td>
      <td>{props.order}</td>
      <td>{props.status}</td>
      <td>
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
      </td>
      <td>
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
      </td>
    </tr>
  );
  return (
    <div>
      <Container fluid>
        <style>{"body { background-color: #f4f3f3; }"}</style>{" "}
        <Table responsive="sm" className="">
          <thead>
            <tr>
              <th>Banner Image</th>
              <th>Order</th>
              <th>URL</th>
              <th>Period</th>
              <th>Last Edit</th>
              <th>Editor Name</th>
              <th> Status</th>
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

export default HomeBannerItems;
