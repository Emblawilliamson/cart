import React, { Component } from "react";

class Product extends Component {
  render() {
    const { onIncrement, onDelete, product } = this.props;
    return (
      <div className="m-2">
        <span className={this.getBadgeClasses()}>{this.formatQuantity()}</span>
        <button
          onClick={() => onIncrement(product)}
          className="btn btn-primary"
        >
          +
        </button>
        <button
          onClick={() => onDelete(product.id)}
          className="btn btn-danger ms-2"
        >
          X
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge me-2 ";
    classes +=
      this.props.product.quantity === 0 ? "bg-warning text-dark" : "bg-primary";
    return classes;
  }
  formatQuantity() {
    const { quantity } = this.props.product;
    return quantity === 0 ? "Zero" : quantity;
  }
}
export default Product;
