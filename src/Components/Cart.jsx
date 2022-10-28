import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <aside
        style={{
          zIndex: 100,
          maxWidth: "22rem",
          height: "100vh",
          overflowY: "scroll",
        }}
        className={this.props.renderCls()}
      >
        <button
          onClick={() => this.props.handleOpenClose()}
          className="btn text-bg-warning"
        >
          <i class="bi bi-x-circle fs-4"></i>
        </button>
        <br />

        <div className="mt-5 d-flex flex-wrap gap-3">
          {this.props.laptops.length > 0 &&
            this.props.laptops.map((lap) => (
              <div className="w-100 p-3 card rounded d-flex flex-wrap gap-2 text-dark" style={{width: "10rem"}}>
                <img
                  src={`${require(`../images/${lap.id}.jpg`)}`}
                  width="100"
                  alt={lap.name}
                />
                <h6 className="fw-bold fs-6">{lap.name}</h6>
                <p className="fw-bold mb-0">
                  <span className="text-secondary fw-light">Qty:</span>{" "}
                  {lap.qty}{" "}
                  <span className="text-secondary fw-light">Subtotal:</span>{" "}
                  {lap.subTotal}
                </p>
                {/* <div className="d-flex gap-2">
                  <button className="btn text-bg-success">+</button>
                  <button className="btn text-bg-danger">-</button>
              </div> */}
              </div>
            ))}
        </div>
        <button className="mt-5 btn btn-outline-primary">
          Total = {this.props.total}
        </button>
      </aside>
    );
  }
}
