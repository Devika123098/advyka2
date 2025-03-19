import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "./FeedbackCard.module.css";

const FeedbackCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.name}>{data.name}</h3>
        <span className={styles.stars}>
          {"★".repeat(data.stars)}{"☆".repeat(5 - data.stars)}
        </span>
      </div>
      <p className={styles.review}>
        {data.eventFeedback
          ? data.eventFeedback.length > 80
            ? data.eventFeedback.substring(0, 80) + "..."
            : data.eventFeedback
          : "No feedback provided"}
      </p>
      <button
        className={styles.expandButton}
        onClick={() => navigate(`/feedback/${data.id}`)}
      >
        <FiArrowUpRight size={20} />
      </button>
    </div>
  );
};

export default FeedbackCard;
