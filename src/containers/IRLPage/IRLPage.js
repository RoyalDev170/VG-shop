import styles from './IRLPage.module.css';
import {ProductCard} from "../../components";
import {irl} from "../../utils/products"

const IRLPage = () => {
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
                <h2 className={styles.sectionTitle}>Mercancia IRL</h2>
                <div className={styles.ProductList}>
                    {irl.map((product) => {
                        return <ProductCard key={product.id} product={product} className={styles.ProductList_card}/>
                    })}
                </div>
            </section>
        </div>
      );
    };

export default IRLPage;