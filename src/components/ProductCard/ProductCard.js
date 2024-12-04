import React, { Component } from "react";
import classNames from "classnames";
import css from "./ProductCard.module.css";

class ProductCard extends Component {
  render() {
    const { className, product, onCardClick } = this.props;

    return (
      <div
        className={classNames(css.ProductCard, className)}
        onClick={() => onCardClick(product)} // Dispara el evento para mostrar el modal
        style={{ cursor: "pointer" }}
      >
        <div className={css.ProductCard_header}>
          <img src={product.image} alt="Product" />
        </div>
        <div className={css.ProductCard_body}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
        <button
          className={css.ProductCard_button}
          onClick={(e) => {
            e.stopPropagation(); // Evita que el clic en el botón abra el modal
            e.preventDefault();

            const currentCart = JSON.parse(localStorage.getItem("cart-vgshop")) || [];

            let productTemp = currentCart.find((item) => item.id === product.id);
            if (productTemp) {
              productTemp.quantity += 1;
            } else {
              currentCart.push({ id: product.id, quantity: 1 });
            }

            localStorage.setItem("cart-vgshop", JSON.stringify(currentCart));
          }}
        >
          Añadir al Carrito
        </button>
      </div>
    );
  }
}

export default ProductCard;

