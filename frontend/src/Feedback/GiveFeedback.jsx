import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import styles from "./Feedback.module.css";
import { FaStar } from "react-icons/fa";

const GiveFeedback = () => {
  const [name, setName] = useState("");
  const [stars, setStars] = useState(0);
  const [review, setReview] = useState("");
  const [websiteFeedback, setWebsiteFeedback] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || stars === 0 || !review) return;
    
    await addDoc(collection(db, "feedback"), { name, stars, review, websiteFeedback });
    navigate("/feedback");
  };

  return (
    <div className={styles.feedbackPage}>
      <h2 className={styles.pageTitle}>Give Feedback</h2>
      <form className={styles.feedbackForm} onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <div className={styles.starRating}>
          {[1, 2, 3, 4, 5].map((i) => (
            <FaStar key={i} className={i <= stars ? styles.activeStar : styles.inactiveStar} onClick={() => setStars(i)} />
          ))}
        </div>
        <textarea placeholder="Review about Advyka'25" value={review} onChange={(e) => setReview(e.target.value)} required />
        <textarea placeholder="Feedback about the website (Optional)" value={websiteFeedback} onChange={(e) => setWebsiteFeedback(e.target.value)} />
        <button type="submit" className={styles.addFeedbackButton}>Submit Feedback</button>
      </form>
    </div>
  );
};

export default GiveFeedback;
