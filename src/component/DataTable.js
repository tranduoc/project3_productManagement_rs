import React, { Component } from "react";
import DatatableRow from "./DatatableRow";

class DataTable extends Component {
  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">No</th>
            <th scope="col">id Product</th>
            <th scope="col">Category</th>
            <th scope="col">Name Product</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <DatatableRow />
        </tbody>
      </table>
    );
  }
}

export default DataTable;
