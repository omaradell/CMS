import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function ReviewsItems(props) {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>Product</th>
            <th>Supplier</th>
            <th>Review Date</th>
            <th>Reviewer</th>
            <th>Review Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.pagename}</td>
            <td>{props.menutab}</td>
            <td>{props.url}</td>
            <td>{props.appearance}</td>
            <td>{props.order}</td>
            <td>{props.action}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ReviewsItems;
