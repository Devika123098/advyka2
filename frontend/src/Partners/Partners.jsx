import React from 'react';
import styles from "./Partners.module.css";
import makemypasslogo from "../assets/makemypasslogo.webp"; 

const Partners = () => {
  return (
    <div className={styles.partnersContainer}>
      <h3>Ticketing Partner</h3>
      <img src={makemypasslogo} alt="MakeMyPass Logo" className={styles.partnerLogo} />
    </div>
  );
}

export default Partners;
