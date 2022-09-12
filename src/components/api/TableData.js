import React from "react";
import { Table } from "react-bootstrap";

const TableData = (props) => {
  return (
    <div>
      <h5>Data Member</h5>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nama Lengkap</th>
            <th>Email</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </Table>
    </div>
  );
};

export default TableData;
