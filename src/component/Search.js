import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchnameInput: "",
    };
  }
  searchName = () => {
    this.props.searchProductName1(this.state.searchnameInput);
  };
  isChange = (e) => {
    let value = e.target.value;
    this.setState({
      searchnameInput: value,
    });
    this.props.searchProductName1(this.state.searchnameInput);
  };
  render() {
    return (
      <div className="search">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="form-group col-6">
                <input
                  onChange={(e) => this.isChange(e)}
                  type="text"
                  className="form-control"
                  id="inputProductName"
                />
              </div>
              <div className="col-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.searchName()}
                >
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#ModalAddProduct"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
