import styles from './LandingPage.module.css';
import {CategoryCard} from "../../components";
import {products} from "../../utils/products"

const LandingPage = () => {
    return(
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

                {/* Banner */}
                <section className={styles.banner}>
                    <div className={styles.bannerContent}></div>
                </section>

                {/* Sección de tarjetas */}
                <section className={styles["product-section"]}>
                    <h2 className={styles.sectionTitle}>Categorías</h2>
                    <div className={styles.ProductList}>
                        {products.map((product) => {
                            return <CategoryCard key={product.id} product={product} className={styles.ProductList_card}/>
                        })}
                    </div>
                </section>

                {/* Footer */}
                <footer className={styles.footer}>
                    <p>© 2024 VG Shop. Todos los derechos reservados.</p>
                </footer>
                </div>

    );
}

export default LandingPage;