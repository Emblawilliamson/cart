import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <span class="navbar-brand h1">
              Navbar
              <span className="badge rounded-pill bg-secondary ms-2">
                {this.props.productCount}
              </span>
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
