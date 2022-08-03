import React, { Component } from "react";

class Product extends Component {
  state = {
    quantity: 11,
  };

  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  render() {
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button onClick={this.handleIncrement} className="btn btn-primary">
          Increment
        </button>
      </div>
    );
  }

  renderTags() {
    if (this.state.quantity > 10)
      return (
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      );
    return <p>The quantity is below 10</p>;
  }

  getBadgeClasses() {
    let classes = "badge me-2 ";
    classes +=
      this.state.quantity === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }
  formatQuantity() {
    const { quantity } = this.state;
    return quantity === 0 ? "Zero" : quantity;
  }
}
export default Product;
