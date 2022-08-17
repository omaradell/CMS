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
        <p className="d-inline-flex">Post Comments</p>
      </td>{" "}
      <td>{props.menutab}</td>
      <td>{props.url}</td>
      <td>{props.appearance}</td>
      <td>
        <Row className=" p-2">
          <Col className=" d-inline-flex justify-content-center">
            <Button variant="success" className="m-auto ">
              Approve{" "}
            </Button>{" "}
            <Button variant="danger" className="m-auto ">
              Delete{" "}
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
              <th>Comment Date</th>
              <th>User</th>
              <th>Comment Details</th>
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
