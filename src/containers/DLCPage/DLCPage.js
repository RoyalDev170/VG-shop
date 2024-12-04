import React, { useState } from "react";
import styles from "./DLCPage.module.css";
import { ProductCard } from "../../components";
import ProductModal from "../../components/ProductModal/ProductModal"; // Importamos el modal
import { dlcs } from "../../utils/products";

const DLCPage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles["landing-page"]}>
      <header className={styles.header}>
        <div className={styles.logo}>VG Shop</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="/home">Inicio</a></li>
            <li><a href="/games">Juegos</a></li>
            <li><a href="/dlcs">DLCs</a></li>
            <li><a href="/irl">IRL</a></li>
            <li><a href="/about">Acerca de</a></li>
          </ul>
        </nav>
        <div className={styles.cartIcon}>
          <ul>
            <li><a href="/cart">🛒</a></li>
          </ul>
        </div>
      </header>
      <section className={styles["product-section"]}>
        <h2 className={styles.sectionTitle}>DLCs</h2>
        <div className={styles.ProductList}>
          {dlcs.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onCardClick={handleCardClick}
              className={styles.ProductList_card}
            />
          ))}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default DLCPage;
