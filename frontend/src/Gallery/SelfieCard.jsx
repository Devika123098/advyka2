import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "./SelfieCard.module.css";

const SelfieCard = ({ selfie }) => {
  const { image, name, timestamp, id } = selfie;
  const navigate = useNavigate();

  const date = new Date(timestamp?.seconds * 1000).toLocaleDateString();
  const time = new Date(timestamp?.seconds * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.selfieCard}>
      <img src={image} alt={name} className={styles.selfieImage} />
      <div className={styles.overlay}>
        <div className={styles.textContainer}>
          <p className={styles.selfieName}>{name}</p>
          <p className={styles.selfieDate}>{date} | {time}</p>
        </div>
        <button
          onClick={() => navigate(`/gallery/${id}`)}
          className={styles.arrowButton}
        >
          <FiArrowUpRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SelfieCard;
