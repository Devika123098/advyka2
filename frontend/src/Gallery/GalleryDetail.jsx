import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./GalleryDetail.module.css";
import { FaWhatsapp, FaInstagram, FaTwitter, FaArrowRight, FaCopy } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const GalleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selfie, setSelfie] = useState(null);

  useEffect(() => {
    const fetchSelfie = async () => {
      const docRef = doc(db, "selfies", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSelfie(docSnap.data());
      } else {
        navigate("/gallery");
      }
    };
    fetchSelfie();
  }, [id, navigate]);

  const shareUrl = `https://advyka.in/gallery/${id}`;
  const shareContent = selfie
    ? `${selfie.name} is at Advyka'25! View it at ${shareUrl}\nAdd your selfies at advyka.in/gallery`
    : "Join Advyka'25 now!";

  const handleShare = (platform) => {
    let url = "";
    if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareContent)}`;
    } else if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareContent)}`;
    } else if (platform === "instagram") {
      alert("Instagram doesn't support direct image sharing. Download your image and share it manually.");
      return;
    }
    window.open(url, "_blank");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareContent);
    alert("Caption copied!");
  };

  return selfie ? (
    <div className={styles.container}>
        <Navbar/>
      <h2 className={styles.heading}>Your Selfie is Live!</h2>
      <img src={selfie.image} alt="Uploaded Selfie" className={styles.selfieImage} />
      <p className={styles.caption}>{selfie.name} is at Advyka'25!</p>

      <div className={styles.buttonContainer}>
        <button onClick={() => handleShare("whatsapp")} className={styles.iconButton}>
          <FaWhatsapp />
        </button>
        <button onClick={() => handleShare("instagram")} className={styles.iconButton}>
          <FaInstagram />
        </button>
        <button onClick={handleCopy} className={styles.iconButton}>
          <FaCopy />
        </button>
      </div>

      <button onClick={() => navigate("/gallery")} className={styles.galleryButton}>
        Go to Gallery <FaArrowRight />
      </button>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </div>
  ) : null;
};

export default GalleryDetail;
