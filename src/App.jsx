import React, { Component } from "react";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      { id: 1, quantity: 0 },
      { id: 2, quantity: 7 },
      { id: 3, quantity: 2 },
      { id: 4, quantity: 8 },
    ],
  };

  handleIncrement = (product) => {
    const products = [...products];
    const index = products.indexOf(product);
    products[index] = { ...product };
    products[index].quantity++;
    this.setState({ products });
  };

  handleDelete = (id) => {
    const products = products.filter((p) => p.id !== id);
    this.setState({ products });
  };

  handleReset = () => {
    const products = products.map((product) => ({
      ...product,
      quantity: 0,
    }));
    this.setState({ products });
  };

  render() {
    const { products } = this.state;
    return (
      <>
        <Navbar productCount={products.length} />

        <Products
          products={products}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
