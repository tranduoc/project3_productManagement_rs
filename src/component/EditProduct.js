import React, { Component } from "react";

class EditProduct extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="container">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Product
                </h5>
              </div>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <form>
              <div className="modal-body">
                <div className="card border-primary mb-3">
                  <div className="card-body text-primary">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control mb-3 "
                        disabled="true"
                        id
                        aria-describedby="emailHelp"
                        placeholder="idProduct"
                      />
                      <input
                        type="text"
                        className="form-control mb-3"
                        id
                        aria-describedby="emailHelp"
                        placeholder="Category"
                      />
                      <input
                        type="text"
                        className="form-control mb-3"
                        id
                        aria-describedby="emailHelp"
                        placeholder="Name Product"
                      />
                      <input
                        type="text"
                        className="form-control mb-3"
                        id
                        aria-describedby="emailHelp"
                        placeholder="Price"
                      />
                      <input
                        type="text"
                        className="form-control"
                        id
                        aria-describedby="emailHelp"
                        placeholder="Quantity"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="reset"
                  className="btn btn-warning"
                  data-dismiss="modal"
                >
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProduct;
