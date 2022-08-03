import React, { Component } from "react";
import Product from "./Product";

class Products extends Component {
  state = {
    products: [
      { id: 1, quantity: 4 },
      { id: 2, quantity: 7 },
      { id: 3, quantity: 2 },
      { id: 4, quantity: 8 },
    ],
  };

  render() {
    return (
      <>
        {this.state.products.map((product) => (
          <Product />
        ))}
      </>
    );
  }
}

export default Products;
