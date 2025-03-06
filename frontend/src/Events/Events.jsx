import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import styles from "./Events.module.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      const querySnapshot = await getDocs(collection(db, "events"));
      const eventList = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setEvents(eventList);
    };

    fetchEvents();
  }, []);

  const filteredEvents = events.filter((event) =>
    event.eventName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search events..."
        className={styles.search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className={styles.grid}>
        {filteredEvents.map((event) => (
          <div key={event.id} className={styles.card}>
            <img src={event.eventPoster} alt={event.eventName} className={styles.image} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>{event.eventName}</h3>
              <button onClick={() => navigate(`/events/${event.id}`)} className={styles.register}>
                <FiArrowUpRight size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
