import React from "react";
import Table from "react-bootstrap/Table";
import { Button, Row, Col, Form, Container } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

function BannerItems(props) {
  const tableRow = (
    //   <tr>
    // //           <td>{props.pagename}</td>
    // //           <td>{props.menutab}</td>
    // //           <td>{props.url}</td>
    // //           <td>{props.appearance}</td>
    // //           <td>{props.order}</td>
    // //           <td>{props.status}</td>
    // //           <td>{props.action}</td>
    // //         </tr>
    <tr style={{ backgroundColor: "#FCFCFC" }}>
      <td className=" ">
        <Row className=" p-4"> {props.pagename}</Row>
      </td>
      <td className="">
        <Row className=" p-3">{props.menutab}</Row>
      </td>
      <td className="">
        <Row className=" p-3">
          <a href="https://example.com/faq.html" rel="noreferrer">
            {props.url}
          </a>
        </Row>
      </td>
      <td width="">
        <Row className=" p-3">{props.order}</Row>
      </td>
      <td className="">
        <Row className=" p-3">{props.order}</Row>
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
      </td>{" "}
    </tr>
  );
  return (
    <div>
      <Container fluid>
        <Table responsive="sm" className="">
          <thead>
            <tr>
              <th>Page Name</th>
              <th>Banner No.</th>
              <th>URL</th>
              <th>Last Edit</th>
              <th>Editor Name</th>
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
    // return (
    //   <div>
    //     <Table striped>
    //
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>{props.pagename}</td>
    //           <td>{props.menutab}</td>
    //           <td>{props.url}</td>
    //           <td>{props.appearance}</td>
    //           <td>{props.order}</td>
    //           <td>{props.status}</td>
    //           <td>{props.action}</td>
    //         </tr>
    //       </tbody>
    //     </Table>
    //   </div>
  );
}

export default BannerItems;
