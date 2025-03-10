import React, { useEffect, useRef, useState } from "react";
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

const Carousel3D = () => {
  const carouselRef = useRef(null);
  const [angle, setAngle] = useState(0);
  const [scrollSpeed, setScrollSpeed] = useState(0);
  const images = [card1, card2, card3, card4, card5, card6, card7, card8];

  const handleScroll = (event) => {
    if (!carouselRef.current) return;
    const rect = carouselRef.current.getBoundingClientRect();
    const middleScreen = window.innerHeight / 2;
    const isCentered = rect.top < middleScreen && rect.bottom > middleScreen;
    if (isCentered) {
      event.preventDefault();
      setScrollSpeed((prev) => prev + event.deltaY * 0.03);
    }
  };

  useEffect(() => {
    let animationFrame;
    const smoothScroll = () => {
      setAngle((prev) => prev + scrollSpeed);
      setScrollSpeed((prev) => prev * 0.94);
      animationFrame = requestAnimationFrame(smoothScroll);
    };
    smoothScroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollSpeed]);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className={styles.carouselContainer} ref={carouselRef}>
      <div className={styles.carousel}>
        {images.map((src, i) => {
          const theta = (i * (2 * Math.PI)) / images.length;
          const x = Math.cos(theta + angle * 0.02) * 350;
          const y = Math.sin(theta * 2 + angle * 0.04) * 180;
          const z = Math.sin(theta + angle * 0.02) * 350;
          return (
            <div
              key={i}
              className={styles.card}
              style={{ transform: `translate3d(${x}px, ${y}px, ${z}px)` }}
            >
              <img src={src} alt={`Card ${i + 1}`} className={styles.cardImage} />
            </div>
          );
        })}
        <div className={styles.logoContainer}>
          <img src={advykabg} alt="Advyka Logo" className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
