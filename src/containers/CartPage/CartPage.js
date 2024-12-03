import styles from './CartPage.module.css';
import { games, dlcs, irl, promoCodes } from '../../utils/products';
import { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart-vgshop")) || []
  );

  const allProducts = [...games, ...dlcs, ...irl];
  const [total, setTotal] = useState(0);
  const [hasPromoCode, setHasPromoCode] = useState(false);

  const applyPromoCode = (promoCode) => {

    if(hasPromoCode){
        return;
    }
    
    if (promoCodes && promoCodes.filter(item => item.code === promoCode).length > 0) {
      const promoCodeData = promoCodes.find(code => code.code === promoCode);

      if (promoCodeData) {
        if (promoCodeData.quantity) {
          if (total >= promoCodeData.quantity) {
            setTotal(total - promoCodeData.quantity);
          }
        }

        if (promoCodeData.percentage) {
          setTotal(total - (total * promoCodeData.percentage / 100));
        }
      }
    }
  };

  useEffect(() => {
    if (cart.length > 0 && !hasPromoCode) {
      setTotal(
        cart.reduce((acc, item) => {
          const product = allProducts.find(product => product.id === item.id);

          if (product) {
            return acc + (product.price * item.quantity);
          } else {
            return acc;
          }
        }, 0)
      );
    }
  }, [cart, hasPromoCode, allProducts]);

  // Función para eliminar el carrito completo
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart-vgshop");
    setTotal(0);
    setHasPromoCode(false);
  };

  // Función para eliminar un producto del carrito
  const removeProduct = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart-vgshop", JSON.stringify(updatedCart));
  };

  return (
    <div className={styles["cart-page"]}>
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

      <div className={styles.cartContainer}>
        <h1 className={styles.cartTitle}>Tu Carrito</h1>
        <div className={styles.cartItems}>
          {cart.length > 0 ? cart.map((item, index) => {
            const product = allProducts.find(product => product.id === item.id);

            if (product) {
              return (
                <div key={index} className={styles.CartPage_item}>
                  <div className={styles.CartPage__item_header}>
                    <img src={product.image} alt="Product" />
                  </div>
                  <div className={styles.CartPage__item_body}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Precio: ${product.price}</p>
                  </div>
                  <div className={styles.CartPage__item_quantity}>
                    <p>Cantidad: {item.quantity}</p>
                  </div>
                  <div className={styles.CartPage__item_total}>
                    <p>Total: ${product.price * item.quantity}</p>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeProduct(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              );
            }

            return null;
          }) : <p>El carrito está vacío.</p>}
        </div>

        <div className={styles.CartPage__promoCode}>
          <input id="promocode" type="text" placeholder='Codigo de Promoción'></input>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setHasPromoCode(true);
              applyPromoCode(document.getElementById("promocode").value);
            }}
          >Aplicar</button>
        </div>

        <div className={styles.CartPage__total}>
          <p>Total:</p>
          <p>${total.toFixed(2)}</p>
        </div>

        <div className={styles.CartPage__actions}>
          <button className={styles.clearCartButton} onClick={clearCart}>
            Vaciar Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
