import React from "react";
import styles from "./SelfieCard.module.css";

const SelfieCard = ({ selfie }) => {
  const { image, name, timestamp } = selfie;

  const date = new Date(timestamp?.seconds * 1000).toLocaleDateString();
  const time = new Date(timestamp?.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className={styles.selfieCard}>
      <img src={image} alt={name} className={styles.selfieImage} />
      <div className={styles.overlay}>
        <p className={styles.selfieName}>{name}</p>
        <p className={styles.selfieDate}>{date} | {time}</p>
      </div>
    </div>
  );
};

export default SelfieCard;
