import React from "react";
import css from "./ProductModal.module.css";

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className={css.modalOverlay}>
      <div className={css.modalContent}>
        <button className={css.closeButton} onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.name} className={css.productImage} />
        <h2 className={css.name}>{product.name}</h2>
        <p>{product.description}</p>
        <p className={css.price}>Precio: ${product.price}</p>
      </div>
    </div>
  );
};

export default ProductModal;
