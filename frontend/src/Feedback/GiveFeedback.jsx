import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import styles from "./GiveFeedback.module.css";
import { FaStar } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const GiveFeedback = () => {
  const [name, setName] = useState("");
  const [stars, setStars] = useState(0);
  const [eventFeedback, setEventFeedback] = useState("");
  const [websiteFeedback, setWebsiteFeedback] = useState("");
  const [errors, setErrors] = useState({}); // Stores error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};
    if (!name) newErrors.name = "Name is required!";
    if (stars === 0) newErrors.stars = "Please give a rating!";
    if (!eventFeedback) newErrors.eventFeedback = "Review is required!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return; // Stop submission if errors exist

    await addDoc(collection(db, "feedback"), { name, stars, eventFeedback, websiteFeedback });
    navigate("/feedback");
  };

  return (
    <div className={styles.feedbackContainer}>
      <Navbar />
      <h2 className={styles.heading}>Give Feedback</h2>
      <form className={styles.feedbackForm} onSubmit={handleSubmit}>
        
        <label className={styles.label}>Your Name</label>
        <input
          type="text"
          className={`${styles.inputField} ${errors.name ? styles.errorInput : ""}`}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className={styles.errorMessage}>{errors.name}</p>}

        <div className={styles.starRatingContainer}>
          <label className={styles.starLabel}>Give Rating</label>
          <div className={styles.starRating}>
            {[1, 2, 3, 4, 5].map((i) => (
              <FaStar
                key={i}
                className={i <= stars ? styles.activeStar : styles.inactiveStar}
                onClick={() => setStars(i)}
              />
            ))}
          </div>
        </div>
        {errors.stars && <p className={styles.errorMessage}>{errors.stars}</p>}

        <label className={styles.label}>Review about Advyka'25</label>
        <textarea
          className={`${styles.textarea} ${errors.eventFeedback ? styles.errorInput : ""}`}
          placeholder="Write your review..."
          value={eventFeedback}
          onChange={(e) => setEventFeedback(e.target.value)}
        />
        {errors.eventFeedback && <p className={styles.errorMessage}>{errors.eventFeedback}</p>}

        <label className={styles.label}>Feedback about our services and website (Optional)</label>
        <textarea
          className={styles.textarea}
          placeholder="Share your thoughts..."
          value={websiteFeedback}
          onChange={(e) => setWebsiteFeedback(e.target.value)}
        />

        <button type="submit" className={styles.submitButton}>Submit Feedback</button>
      </form>
      <Footer />
    </div>
  );
};

export default GiveFeedback;
