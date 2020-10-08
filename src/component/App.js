import React, { Component } from "react";

import "./../css/App.css";
import AddProduct from "./AddProduct";

import DataTable from "./DataTable";
import EditProduct from "./EditProduct";

import Header from "./Header";

import Search from "./Search";
import dataProduct from "./dataProduct.json";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      data: dataProduct,
      productEdit: {},
      searchName: "",
    };
  }

  getInfo = (formValue) => {
    const { name, password } = formValue;
    if (name && password) this.setState({ isLogin: false });
  };

  getProduct = (idproduct, category, name, price, quantity) => {
    let item = {};
    item.idproduct = parseInt(idproduct);
    item.category = category;
    item.name = name;
    item.price = parseInt(price);
    item.quantity = parseInt(quantity);
    let products = this.state.data;
    products.push(item);
    this.setState({
      data: products,
    });
  };

  deleteProduct = (idproduct) => {
    return this.state.data.map((item, index) => {
      if (item.idproduct === idproduct) {
        let products = this.state.data;
        products.splice(index, 1);
        this.setState({
          data: products,
        });
      }
    });
  };

  showProductEdit = (index1) => {
    this.state.data.forEach((item, index) => {
      if (index === index1) {
        this.setState({
          productEdit: item,
        });
      }
    });
  };

  updateProductEdit = (index, category, name, price, quantity) => {
    let data1 = this.state.data;
    data1.forEach((item) => {
      if (item.idproduct === parseInt(index)) {
        item.idproduct = index;
        item.category = category;
        item.name = name;
        item.price = price;
        item.quantity = quantity;
      }
    });

    this.setState({
      data: data1,
    });
  };

  searchProductName = (productname) => {
    this.setState({
      searchName: productname,
    });
  };

  render() {
    let result = [];

    this.state.data.forEach((item) => {
      if (
        item.name.toLowerCase().indexOf(this.state.searchName.toLowerCase()) !==
        -1
      ) {
        result.push(item);
      }
    });
    return (
      <div className="container">
        <Header />
        <Search
          searchProductName1={(searchname) =>
            this.searchProductName(searchname)
          }
        />
        <DataTable
          productlist={result}
          deleteProduct1={(idproduct) => {
            this.deleteProduct(idproduct);
          }}
          showProductEdit1={(index) => {
            this.showProductEdit(index);
          }}
        />
        <AddProduct
          getProduct1={(idproduct, category, name, price, quantity) =>
            this.getProduct(idproduct, category, name, price, quantity)
          }
        />
        <EditProduct
          productEdit1={this.state.productEdit}
          updateProductEdit1={(id, category, name, price, quantity) => {
            this.updateProductEdit(id, category, name, price, quantity);
          }}
        />
      </div>
    );
  }
}

export default App;
