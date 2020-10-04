import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="form-group col-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputProductName"
                />
              </div>
              <div className="col-6">
                <button type="button" className="btn btn-primary">
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
              data-target="#exampleModal"
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
