import React,{useRef}from "react";
import styles from "./Proshows.module.css"; 
import proshow1 from "../assets/proshow1.webp"
import ProshowCard from "../components/Proshowcard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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
          <h2 className={styles.comingSoon}>Booking Opens Soon</h2>
          {/* <h2>2025</h2> */}
        </div>
        <div className={styles.blurBottom}></div>
      </div>

    
      <div className={styles.cardSection}>
      {/* <ProshowCard
        day="Day 2"
        date="22/02/2025 (Saturday)"
        description="Get ready for a night of ultimate musical brilliance at this season's most spectacular fest! Experience an electrifying atmosphere filled with breathtaking performances, pulsating beats, and unforgettable moments. With stunning stage setups, mesmerizing lights, and top artists bringing their best, this is a night you don’t want to miss. Get ready to dance, sing, and celebrate as we take the excitement to a whole new level. The countdown has begun—are you ready for an experience like never before?"
        image= {proshow1}
        />
         <ProshowCard
        day="Day 2"
        date="22/02/2025 (Saturday)"
        description="Get ready for a night of ultimate musical brilliance at this season's most spectacular fest! Experience an electrifying atmosphere filled with breathtaking performances, pulsating beats, and unforgettable moments. With stunning stage setups, mesmerizing lights, and top artists bringing their best, this is a night you don’t want to miss. Get ready to dance, sing, and celebrate as we take the excitement to a whole new level. The countdown has begun—are you ready for an experience like never before?"
        image= {proshow1}
        /> */}
       <div ref={footerRef} className={styles.footer}>
            <Footer/> 
          </div>  
      </div>
    </div>
  );
};

export default Proshows;
