import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import styles from "./Addselfie.module.css";

const AddSelfie = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleImageUpload = async () => {
    if (!image) return alert("Please select an image!");

    setUploading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "selfies");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dby0vmlef/image/upload",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setImageUrl(res.data.secure_url);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Image upload failed!");
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async () => {
    if (!name || !imageUrl) {
      alert("Please enter your name and upload an image first!");
      return;
    }

    setSubmitting(true);
    try {
      const docRef = await addDoc(collection(db, "selfies"), {
        name,
        image: imageUrl,
        timestamp: new Date(),
      });

      alert("Selfie submitted successfully!");
      navigate(`/gallery/${docRef.id}`);
    } catch (error) {
      console.error("Error saving to Firestore:", error);
      alert("Submission failed!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h2 className={styles.title}>Upload Your Selfie</h2>

        <label className={styles.label}>Enter Your Name</label>
        <input
          type="text"
          placeholder="Your Name"
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className={styles.label}>Upload Selfie</label>
        <input
          type="file"
          className={styles.fileInput}
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          type="button"
          className={styles.uploadButton}
          onClick={handleImageUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>

        <button
          type="button"
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={!imageUrl || submitting}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default AddSelfie;
