import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div
        className="product_item mx-3"
        style={{ width: "10%", margin: "20px " }}
      >
        <button
          onClick={() => {
            this.props.changeColorGlass(this.props.item);
          }}
        >
          <img
            style={{ width: "80%", height: "80px" }}
            src={this.props.item.url}
            alt=""
          />
        </button>
      </div>
    );
  }
}
