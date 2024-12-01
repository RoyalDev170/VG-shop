import styles from './AboutUsPage.module.css';

const AboutUsPage = () => {
    return(
        <div className={styles["about-us"]}>
                <header className={styles.header}>
                    <div className={styles.logo}>VG Shop</div>
                    <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><a href ="/home">Inicio</a></li>
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
            <div className={styles['about-us-container']}>
                <h1 className={styles['about-us-title']}>Conocenos</h1>
                <img
                    src="https://via.placeholder.com/400x200" 
                    alt="Our Team"
                    className={styles['about-us-image']}
                />
                <p className={styles['about-us-text']}>
                    ¡Bienvenidos a nuestro marketplace de videojuegos! Nos apasiona conectar a los jugadores con los mejores títulos, 
                    equipos y experiencias en todas las plataformas. Ya seas un jugador casual o un entusiasta dedicado, tenemos algo para ti.
                </p>
                <p className={styles['about-us-text']}>
                    Con un enfoque en la calidad, la variedad y la satisfacción del cliente, nuestro objetivo es hacer que tu experiencia de compra 
                    sea lo más fluida y agradable posible. Nuestro equipo trabaja incansablemente para traerte los últimos lanzamientos, ofertas exclusivas 
                    y recomendaciones valiosas adaptadas a tus preferencias.
                </p>
                <p className={styles['about-us-text']}>
                    Únete a nosotros en la exploración de un mundo de juegos donde cada género y estilo tiene su lugar. Gracias por elegirnos 
                    como tu destino para todo lo relacionado con videojuegos. ¡A jugar!
                </p>
            </div>
            <footer className={styles.footer}>
                <p>© 2024 VG Shop. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
}

export default AboutUsPage;