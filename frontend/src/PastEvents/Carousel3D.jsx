import React from "react";
import styles from "./Carousel3D.module.css";
import advykabg from "../assets/advykabg.webp";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
import card4 from "../assets/card4.webp";
import card5 from "../assets/card5.webp";
import card6 from "../assets/card6.webp";
import card7 from "../assets/card7.webp";
import card8 from "../assets/card8.webp";

const images = [card1, card2, card3, card4, card5, card6, card7, card8];

const Carousel3D = () => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.scene}>
        <div className={styles.logoContainer}>
          <img src={advykabg} alt="Advyka Logo" className={styles.logo} />
        </div>
        <div className={styles.carousel}>
          {images.map((src, i) => {
            const angle = (i * 360) / images.length;
            return (
              <div
                key={i}
                className={styles.card}
                style={{
                  transform: `rotateY(${angle}deg) translateZ(300px)`,
                }}
              >
                <img src={src} alt={`Card ${i + 1}`} className={styles.cardImage} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
