import Cards from '../components/Cards'
import React, { useEffect, useRef } from 'react';
import rocketIcon from '../assets/icons8-rocket-50.png';
import trophyIcon from '../assets/icons8-trophy-64.png';
import styles from './About.module.css'
function About() {

    return (
        <section className={styles.about_container}>
            <div className={styles.background_container}>
            </div>
            <div className={styles.content}>
            <div className={styles.about_title_container}><h2 className={styles.about_title}>About Advyka</h2></div>
            <div className={styles.card_container}>
               <div className={styles.about_cards}><Cards  icon = {rocketIcon} title = "Innovation Hub" text = "Experience the ultimate tech fest of College of Engineering Perumon, where innovation meets creativity! "/></div> 
               <div className={styles.about_cards}><Cards icon={trophyIcon} title = "Competitions" text = "Participate in exciting competitions and win amazing prizes worth ₹1,00,000+."/></div> 
            </div>
            </div>
        </section>
    )
}

export default About