import React, { Component } from "react";
import Cart from "./Cart";

export default class Navbar extends Component {
  state = {
    open: false,
  };

  handleCrossBtn = () => {
    this.setState((prev) => ({ open: !prev.open }));
  };

  renderClasses = () => {
    if (this.state.open) {
      return "p-4 text-light position-fixed bg-dark rounded end-0 top-0";
    } else {
      return "d-none";
    }
  };

  render() {
    return (
      <nav className="mb-4 p-3 navbar bg-light d-flex gap-3">
        <Cart cartState={this.state.open} handleOpenClose={this.handleCrossBtn} renderCls={this.renderClasses} laptops={this.props.cartLaptops} total={this.props.total} />

        <div className="container m-auto d-flex justify-content-center">
            <h1 className="fw-bold col">My Cart</h1>
            <div class="container col text-end">
              <button onClick={() => this.handleCrossBtn()} className="btn btn-primary position-relative">
                <i class="bi bi-basket"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {this.props.leng}
                  <span className="visually-hidden">
                    Number of items in your cart
                  </span>
                </span>
              </button>
            </div>
        </div>
      </nav>
    );
  }
}
