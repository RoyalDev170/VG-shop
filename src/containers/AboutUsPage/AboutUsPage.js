import styles from './AboutUsPage.module.css';
import {ProductCard} from "../../components";
import {products} from "../../utils/products"

const AboutUsPage = () => {
    return(
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

                <div className={styles.ProductList}>
                    {products.map((product) => {
                        return <ProductCard key={product.id} product={product} className={styles.ProductList_card}/>
                    })}
                </div>
            </div>
    );
}

export default AboutUsPage;