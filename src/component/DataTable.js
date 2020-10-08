import React, { Component } from "react";
import DatatableRow from "./DatatableRow";

class DataTable extends Component {
  constructor(props) {
    super(props);
  }

  showProducts = () => {
    return this.props.productlist.map((item, index) => {
      return (
        <DatatableRow
          key={index}
          number={index}
          idproduct={item.idproduct}
          category={item.category}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          deleteProduct2={(idproduct) => {
            this.props.deleteProduct1(idproduct);
          }}
          showProductEdit2={() => {
            this.props.showProductEdit1(index);
          }}
          // getProductEdit2={(idproduct, category, name, price, quantity) =>
          //   this.props.getProductEdit1(
          //     idproduct,
          //     category,
          //     name,
          //     price,
          //     quantity
          //   )
          // }
        />
      );
    });
  };

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
        <tbody>{this.showProducts()}</tbody>
      </table>
    );
  }
}

export default DataTable;
