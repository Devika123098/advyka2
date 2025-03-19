import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./FeedbackDetails.module.css";

const FeedbackDetails = () => {
  const { id } = useParams();
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedback = async () => {
      const docRef = doc(db, "feedback", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setFeedback({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.error("Feedback not found");
      }
    };

    fetchFeedback();
  }, [id]);

  if (!feedback) {
    return <p className={styles.loading}>Loading feedback...</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <Navbar />
      
      <div className={styles.detailsContent}>
        <div className={styles.detailsCard}>
          <h2 className={styles.detailsName}>{feedback.name}</h2>
          <div className={styles.detailsStars}>
            {"★".repeat(feedback.stars)}{"☆".repeat(5 - feedback.stars)}
          </div>
          <p className={styles.detailsReview}>{feedback.eventFeedback}</p>
          {feedback.websiteFeedback && (
            <p className={styles.detailsWebsiteFeedback}>
              {feedback.websiteFeedback}
            </p>
          )}
          <button className={styles.backButton} onClick={() => navigate("/feedback")}>
            Back to Feedback
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FeedbackDetails;
