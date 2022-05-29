import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar">
          <li style={{ listItem: "none" }}>
            {" "}
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
