import React from "react";
import styles from "./ProshowCard.module.css";
import { SiGooglecalendar } from "react-icons/si";
import { IoTicketSharp } from "react-icons/io5";

const ProshowCard = ({ day, date, description, image }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt={`Proshow ${day}`} className={styles.image} />
      </div>
      <div className={styles.detailsContainer}>
        <h2 className={styles.day}>{day}</h2>
        <p className={styles.description}>{description}</p>
        <hr className={styles.separator} />
        <div className={styles.dateSection}>
          <span className={styles.dateIcon}><SiGooglecalendar /></span>
          <span className={styles.date}>{date}</span>
        </div>
        <a href="https://makemypass.com/event/advyka-proshow" target="_blank" rel="noopener noreferrer">
          <button className={styles.bookButton}>
              Get Tickets <IoTicketSharp />
            </button>
        </a>
      </div>
    </div>
  );
};

export default ProshowCard;
