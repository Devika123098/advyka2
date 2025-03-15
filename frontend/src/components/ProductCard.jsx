import React from 'react';
import tshirt from '../assets/advyka-tshirt.png';
import styles from './ProductCard.module.css';
// import styles from '../Shop/Shop.module.css';
import Navbar from '../Navbar/Navbar';
const ProductCard = () => {
    return (
        <div className={styles.wrapper}>
            <Navbar />
            <h2 className={styles.title}>SHOP NOW!!!</h2>
            <div className={styles.card}>
                <div className={styles.image}>
                    <img src={tshirt} alt="Advyka T-Shirt" width={400} />
                </div>
                <div className={styles["about-product"]}>
                    <h3>Advyka T-Shirt</h3>
                    <h4 className={styles.productPrice}>Rs 380</h4>
                    <a href="https://forms.gle/ZbB4ZHwTtaHQh9aV7"
                        className={styles.btn}>Buy Now</a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;