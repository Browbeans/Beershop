import React, { Component, CSSProperties } from "react";
import { CartContext } from "../context/CartContext";

class Header extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <h1>Dugges</h1>
        <p style={{ fontSize: "2rem" }}>🛒</p>
      </div>
    );
  }
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  background: "black",
  color: "white",
  padding: "1.4rem 3rem",
};

export default Header;
