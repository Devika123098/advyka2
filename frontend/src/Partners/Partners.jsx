import React from 'react';
import styles from "./Partners.module.css";
import makemypasslogo from "../assets/makemypasslogo.webp"; 
import concoctlogo from "../assets/concoctwhite.webp";
import fab5logo from '../assets/fab5.webp';
import realme from "../assets/realme.webp";
import sbi from "../assets/sbi.webp";
import snmobiles from "../assets/snmobiles.webp";
import arcite from "../assets/arcite.webp";

const Partners = () => {
  return (
    <div className={styles.partnersContainer}>
      <div className={styles.sponsors}>
        <h3 className={styles.sponsors}>Sponsors</h3>
      </div>
      <div className={styles.firstrow}>
        <img src={realme} alt="realme Logo" className={styles.realme} />
        <img src={arcite} alt="arcite Logo" className={styles.arcite} />
        <img src={sbi} alt="arcite Logo" className={styles.sbi} />
        <img src={snmobiles} alt="snmobiles Logo" className={styles.snmobiles} />
      </div>
      <div className={styles.secondrow}>
        <div className={styles.festivePartner}>
          <h3 className={styles.headings}>Festive Partner</h3>
          <img src={concoctlogo} alt="Concoct Logo" className={styles.concoctLogo} />
        </div>
        <div className={styles.ticketingPartner}>
          <h3 className={styles.headings}>Ticketing Partner</h3>
          <img src={makemypasslogo} alt="MakeMyPass Logo" className={styles.partnerLogo} />
        </div>
        <div className={styles.artistPartner}>
          <h3 className={styles.headings}>Production Partner</h3>
          <img src={fab5logo} alt="Fab5 Logo" className={styles.fab5Logo} />
        </div>
      </div>
    </div>
  );
}

export default Partners;
