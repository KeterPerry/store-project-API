import "./App.css";
import React, { Component } from "react";
import Header from "./components/header";
import Products from "./components/products";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="Container">
        <Header />
        <div className="bla">
          <Route exact path="/products" component={Products} />
        </div>
      </div>
    );
  }
}
