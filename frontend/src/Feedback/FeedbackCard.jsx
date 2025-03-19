import React, { useState } from "react";
import styles from "./Feedback.module.css";
import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";

const FeedbackCard = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{data.name}</h3>
      <div className={styles.rating}>
        <FaStar className={styles.starIcon} />
        <span>{data.rating}/5</span>
      </div>
      <p className={styles.review}>{data.eventFeedback || "No review provided."}</p>
      {expanded && <p className={styles.review}>{data.websiteFeedback || "No website feedback."}</p>}
      <button className={styles.expandButton} onClick={() => setExpanded(!expanded)}>
        {expanded ? <FaChevronUp /> : <FaChevronDown />}
      </button>
    </div>
  );
};

export default FeedbackCard;
