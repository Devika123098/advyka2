import React,{useRef}from "react";
import styles from "./Proshows.module.css"; 
import day1pass from "../assets/vedanday1.webp"
import day2pass from "../assets/day2pass.webp"
import combo from "../assets/combo.webp"
import ProshowCard from "../components/Proshowcard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Partners from "../Partners/Partners"
const Proshows = () => {
  const footerRef = useRef(null);
  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.proshowsContainer}>
      <div className={styles.heroSection}>
      <Navbar scrollToFooter={scrollToFooter} />
        <div className={styles.content}>
          <h1 className={styles.heading}>Advyka Proshows</h1>
          <h2>2025</h2>
        </div>
        <div className={styles.blurBottom}></div>
      </div>

    
      <div className={styles.cardSection}>
      <ProshowCard
        day="Combo Pass"
        date="22 & 23 March"
        description="Get ready for two electrifying nights of music, energy, and unforgettable performances with the Advyka'25 Combo Pass. On Day 1, experience the high-energy performance of Vedan Live, followed by a spectacular fashion show filled with style and glamour. On Day 2, let Antara Mitra’s soulful melodies take you on a mesmerizing musical journey before DJ Sanaah turns up the energy with an electrifying set that will have you dancing all night. With live music, stunning visuals, and non-stop entertainment, the Combo Pass guarantees an experience you won’t forget. Grab yours now!"
        image= {combo}
        />
      <ProshowCard
        day="Day 1 Pass"
        date="22 March Saturday"
        description="
Get ready for an electrifying start to Advyka'25 with the Day 1 Pass, an unforgettable fusion of high-energy music and breathtaking fashion. Brace yourself as Vedan Live sets the stage on fire with their powerful riffs, soul-stirring vocals, and electrifying energy, delivering a performance that will leave you spellbound. As the night unfolds, immerse yourself in the world of style and creativity with the Fashion Show, where elegance meets innovation in a dazzling spectacle of talent and glamour. From heart-thumping beats to stunning runway moments, Day 1 promises an unparalleled experience of rhythm, artistry, and pure excitement. Don’t just witness the magic—be a part of it! 🎸👗🔥"
        image= {day1pass}
        />
         <ProshowCard
        day="Day 2"
        date="23 March Sunday"
        description="Get ready for a sensational night of music and electrifying beats with the Day 2 Pass at Advyka'25! Lose yourself in the mesmerizing voice of Antara Mitra, as she takes you on a musical journey with her soulful melodies and chart-topping hits, creating an experience that will leave you enchanted. As the night intensifies, DJ Sana takes over, turning up the energy with an electrifying set that will have you dancing non-stop. From the magic of live vocals to the pulsating rhythms of a power-packed DJ performance, Day 2 promises an unforgettable night of music, energy, and euphoria. Don’t just hear the music—feel it! 🎤🎧🔥"
        image= {day2pass}
        />
        <div className={styles.partners}>
          <Partners/>
        </div>
       <div ref={footerRef} className={styles.footer}>
            <Footer/> 
          </div>  
      </div>
    </div>
  );
};

export default Proshows;
