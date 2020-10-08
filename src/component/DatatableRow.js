import React, { Component } from "react";

class DatatableRow extends Component {
  render() {
    return (
      <tr>
        <th>{this.props.number}</th>
        <td>{this.props.idproduct}</td>
        <td>{this.props.category}</td>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
        <td>{this.props.quantity}</td>
        <td>
          <div className="form-group">
            <button
              className="btn btn-warning"
              onClick={() => {
                this.props.showProductEdit2();
              }}
              data-toggle="modal"
              data-target="#ModalEditProduct"
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                this.props.deleteProduct2(this.props.idproduct);
              }}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default DatatableRow;
