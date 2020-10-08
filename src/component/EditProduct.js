import React, { Component } from "react";

class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      name: "",
      price: "",
      quantity: "",
    };
  }
  isChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onUpdate = () => {
    this.props.updateProductEdit1(
      this.props.productEdit1.idproduct,
      this.state.category,
      this.state.name,
      this.state.price,
      this.state.quantity
    );
  };

  render() {
    return (
      <div
        className="modal fade"
        id="ModalEditProduct"
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
                        onChange={(event) => {
                          this.isChange(event);
                        }}
                        defaultValue={this.props.productEdit1.idproduct}
                        name="idproduct"
                        type="text"
                        className="form-control mb-3 "
                        id
                        aria-describedby="emailHelp"
                        placeholder="idProduct"
                        disabled="true"
                      />
                      <input
                        defaultValue={this.props.productEdit1.category}
                        name="category"
                        type="text"
                        className="form-control mb-3"
                        id
                        aria-describedby="emailHelp"
                        placeholder="Category"
                        onChange={(event) => {
                          this.isChange(event);
                        }}
                      />
                      <input
                        defaultValue={this.props.productEdit1.name}
                        name="name"
                        type="text"
                        className="form-control mb-3"
                        id
                        aria-describedby="emailHelp"
                        placeholder="Name Product"
                        onChange={(event) => {
                          this.isChange(event);
                        }}
                      />
                      <input
                        defaultValue={this.props.productEdit1.price}
                        name="price"
                        type="text"
                        className="form-control mb-3"
                        id
                        aria-describedby="emailHelp"
                        placeholder="Price"
                        onChange={(event) => {
                          this.isChange(event);
                        }}
                      />
                      <input
                        defaultValue={this.props.productEdit1.quantity}
                        name="quantity"
                        type="text"
                        className="form-control"
                        id
                        aria-describedby="emailHelp"
                        placeholder="Quantity"
                        onChange={(event) => {
                          this.isChange(event);
                        }}
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
                  type="button"
                  className="btn btn-warning"
                  data-dismiss="modal"
                  onClick={() => this.onUpdate()}
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
