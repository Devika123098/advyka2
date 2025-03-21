import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SelfieCard from "./SelfieCard";
import styles from "./Gallery.module.css";

const Gallery = () => {
  const [selfies, setSelfies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSelfies = async () => {
      const querySnapshot = await getDocs(collection(db, "selfies"));
      const selfieList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSelfies(selfieList);
    };

    fetchSelfies();
  }, []);

  return (
    <div className={styles.galleryContainer}>
      <Navbar />

      <div className={styles.heroSection}>
        <h1 className={styles.heading}>Live Selfie Gallery</h1>
        <p className={styles.subText}>Capture & Share your moments at Advyka'25!</p>
        <div className={styles.buttonWrapper}>
        <button className={styles.uploadButton} onClick={() => navigate("/addselfie")}>
          <FaPlus className={styles.plusIcon} /> Upload Your Selfie
        </button>
        </div>
      </div>

      <div className={styles.galleryGrid}>
        {selfies.length > 0 ? (
          selfies.map((selfie) => <SelfieCard key={selfie.id} selfie={selfie} />)
        ) : (
          <p className={styles.noSelfies}>No selfies uploaded yet... Be the first to share!</p>
        )}
      </div>

      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
