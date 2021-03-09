import React from "react";
import CartProvider from "../context/CartContext";
import Layout from "./Layout";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Layout />
      </div>
    </CartProvider>
  );
}

export default App;
