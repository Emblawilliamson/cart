import React, { Component } from "react";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <div>
        <p>Hej mitt namn är Embla</p>
        <Products />
      </div>
    );
  }
}

export default App;
