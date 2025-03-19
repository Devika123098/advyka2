import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import FeedbackCard from "./FeedbackCard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./Feedback.module.css";

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedback = async () => {
      const querySnapshot = await getDocs(collection(db, "feedback"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(data);
    };
    fetchFeedback();
  }, []);

  return (
    <>
      <div className={styles.container}>
      <Navbar />
        <h1 className={styles.title}>Advyka Feedback</h1>
        <button className={styles.addButton} onClick={() => navigate("/givefeedback")}>
          Add Feedback
        </button>
        <div className={styles.grid}>
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback) => <FeedbackCard key={feedback.id} data={feedback} />)
          ) : (
            <p className={styles.noFeedback}>No feedback available.</p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Feedback;
