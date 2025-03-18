import React from 'react';
import styles from "./Partners.module.css";
import makemypasslogo from "../assets/makemypasslogo.webp"; 
import concoctlogo from "../assets/concoct.webp";
import fab5logo from '../assets/fab5.webp';
const Partners = () => {
  return (
    <div className={styles.partnersContainer}>
    <div className={styles.festivePartner}>
        <h3>Festive Partner</h3>
        <img src={concoctlogo} alt="Concoct Logo" className={styles.concoctLogo} />
      </div>
      <div className={styles.ticketingPartner}>
        <h3>Ticketing Partner</h3>
        <img src={makemypasslogo} alt="MakeMyPass Logo" className={styles.partnerLogo} />
      </div>
      <div className={styles.artistPartner}>
        <h3>Artist Managed By</h3>
        <img src={fab5logo} alt="Fab5 Logo" className={styles.fab5Logo} />
      </div>
    </div>
  );
}

export default Partners;
