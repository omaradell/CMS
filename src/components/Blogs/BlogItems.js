import React from "react";
import Table from "react-bootstrap/Table";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function BlogItems(props) {
  const tableRow = (
    <tr style={{ backgroundColor: "#FCFCFC" }}>
      <td>
        <Image
          style={{ width: "5rem", height: "4rem" }}
          src="https://cdn.iconscout.com/icon/free/png-256/sheet-93369.png"
        />
        <p className="d-inline-flex">Blog Posts</p>
      </td>{" "}
      <td>
        {" "}
        <Button
          variant="light"
          className="m-auto rounded-pill"
          style={{ backgroundColor: " #f2e4fd", color: "#dcbdf4" }}
        >
          {props.menutab}
        </Button>{" "}
      </td>
      <td>
        <a href="https://example.com/faq.html" rel="noreferrer">
          {props.url}
        </a>
      </td>
      <td>{props.order}</td>
      <td>{props.pagename}</td>
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
      </td>{" "}
    </tr>
  );
  return (
    <div>
      <Container fluid>
        <Table>
          <thead>
            <tr>
              <th>Post</th>
              <th>Category</th>
              <th>URL</th>
              <th>Published Date</th>
              <th>Author</th>
              <th>Status</th>
              <th className="d-flex justify-content-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array(5)
              .fill(0)
              .map(() => tableRow)}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default BlogItems;
