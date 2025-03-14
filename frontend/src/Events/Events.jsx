import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "./Events.module.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedDept, setSelectedDept] = useState("ALL");
  const navigate = useNavigate();
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventList);
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(search.toLowerCase()) &&
    (selectedDept === "ALL" || event.department === "COMMON" || event.department === selectedDept)
  );

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <Navbar scrollToFooter={scrollToFooter}/>
        <div className={styles.content}>
          <h1 className={styles.heading}>Advyka Workshops & Events</h1>
          <h2>2025</h2>
        </div>
        <div className={styles.blurBottom}></div>
      </div>

      <input
        type="text"
        placeholder="Search events..."
        className={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.filterContainer}>
        {["ALL", "CSE", "ECE", "EEE", "MECH"].map((dept) => (
          <button
            key={dept}
            className={`${styles.filterButton} ${
              selectedDept === dept ? styles.active : ""
            }`}
            onClick={() => setSelectedDept(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <img
              src={event.eventPoster}
              alt={event.eventName}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{event.eventName}</h3>
                <p className={styles.eventType}>{event.eventType}</p>
              </div>
              <button
                onClick={() => navigate(`/events/${event.id}`)}
                className={styles.register}
              >
                <FiArrowUpRight size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div ref={footerRef} className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Events;
