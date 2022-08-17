import React from "react";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

function CustomerItems(props) {
  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Profile</th>
            <th>Email</th>
            <th>Date join</th>
            <th>Newsletter</th>
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
            <td>{props.status}</td>
            <td>{props.action}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default CustomerItems;
