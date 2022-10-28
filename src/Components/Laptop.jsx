import React, { Component } from "react";

export default class Laptop extends Component {
  render() {
    let {id, name, price, img} = this.props.data;
    return (
      <div
        className="p-3 card rounded shadow d-flex gap-1 flex-wrap justify-content-center"
        style={{ maxWidth: "15rem" }}
      >
        <img src={img} alt={name} width="200" className="m-auto mb-4" />
        <h3 className="fw-bold">{name}</h3>
        <h4 className="text-secondary">{price} DH</h4>
        <button className="btn btn-outline-primary mt-3" onClick={() => this.props.handleCartClick(id)}>Add to Cart</button>
      </div>
    );
  }
}
