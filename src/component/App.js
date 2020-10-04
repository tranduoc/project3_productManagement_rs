import React, { Component } from "react";

import "./../css/App.css";

import DataTable from "./DataTable";

import Header from "./Header";
import Search from "./Search";

class App extends Component {
  state = {
    isLogin: true,
  };
  getInfo = (formValue) => {
    const { name, password } = formValue;
    if (name && password) this.setState({ isLogin: false });
  };

  render() {
    return (
      <div className="container">
        <Header />
        <Search />
        <DataTable />
      </div>
    );
  }
}

export default App;
