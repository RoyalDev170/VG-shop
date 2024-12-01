import styles from './CartPage.module.css';

const CartPage = () => {
  const cartItems = [
    { id: 1, name: "Juego A", price: 50, quantity: 1 },
    { id: 2, name: "Juego B", price: 30, quantity: 2 },
    { id: 3, name: "Juego C", price: 20, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
                    {cartItems.map((item) => (
                    <div key={item.id} className={styles.cartItem}>
                        <div className={styles.itemDetails}>
                        <h3>{item.name}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        </div>
                        <div className={styles.itemPrice}>${item.price * item.quantity}</div>
                    </div>
                    ))}
                </div>
                <div className={styles.cartSummary}>
                    <h3>Total: ${calculateTotal()}</h3>
                    <button className={styles.checkoutButton}>Proceder al Pago</button>
                </div>
            </div>
        </div>
  );
};

export default CartPage;
