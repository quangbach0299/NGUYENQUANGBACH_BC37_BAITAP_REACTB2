import React, { Component } from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductList.module.css";
import Data from "../dataGlasses.json";

export default class ProductList extends Component {
  renderProductItem = () => {
    const html = Data.map((item) => {
      return (
        <ProductItem
          key={item.id}
          item={item}
          changeColorGlass={this.changeColorGlass}
        ></ProductItem>
      );
    });
    return html;
  };

  state = {
    glassImage: null,
    glassDesc: null,
  };

  changeColorGlass = (dataFromChild) => {
    this.setState(
      { glassImage: dataFromChild.url, glassDesc: dataFromChild.desc },
      () => {
        console.log(this.state.glassDesc);
      }
    );
    // console.log(dataFromChild.url);
  };

  render() {
    // console.log(Data);
    return (
      <div className="">
        <div className={styles.header}>
          <h1 className="text-center">TRY GLASSES APP ONLINE</h1>
        </div>
        <div className={styles.carousel}>
          <div className={styles.model}>
            <img src="./glassesImage/model.jpg" alt="" />
            <p style={{ width: "480px", height: "66px" }}>
              {this.state.glassDesc}
            </p>
            <img
              className={styles.overlay}
              src={this.state.glassImage}
              alt=""
            />
          </div>
          <div className={styles.list}>
            <div className={styles.list_content}>
              {this.renderProductItem()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
