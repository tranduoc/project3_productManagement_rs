import React, { Component } from "react";

class DatatableRow extends Component {
  render() {
    return (
      <tr>
        <th>No</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              Edit
            </button>
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default DatatableRow;
