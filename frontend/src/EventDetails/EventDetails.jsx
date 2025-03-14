import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import styles from "./EventDetails.module.css";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import { FiShare2 , FiEdit} from "react-icons/fi";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);


  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) return;
      
      try {
        const docRef = doc(db, "events", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setEvent(docSnap.data());
        } else {
          console.error("Event not found");
        }
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  if (!event) {
    return <h2 className={styles.error}>Event not found.</h2>;
  }
  const handleShare = () => {
    const eventLink = `https://advyka.in/events/${id}`;
    navigator.clipboard.writeText(eventLink);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };
  const coordinators = [];
  if (event.cor1_name && event.cor1_num) {
    coordinators.push({ name: event.cor1_name, phone: event.cor1_num });
  }
  if (event.cor2_name && event.cor2_num) {
    coordinators.push({ name: event.cor2_name, phone: event.cor2_num });
  }
  if (event.cor3_name && event.cor3_num) {
    coordinators.push({ name: event.cor3_name, phone: event.cor3_num });
  }
  if (event.cor4_name && event.cor4_num) {
    coordinators.push({ name: event.cor4_name, phone: event.cor4_num });
  }

  return (
    <div className={styles.container}>
      <h4 className={styles.presents}>Advyka Presents</h4>
      <h1 className={styles.title}>{event.eventName}</h1>
      <div className={styles.card}>
        <img src={event.eventPoster} alt={event.eventName} className={styles.poster} />
        <div className={styles.details}>
          <p className={styles.date}>Date: {event.eventDate}</p>
          <p className={styles.description} style={{ whiteSpace: "pre-line" }}>
              {event.eventDescription}
            </p>

          {coordinators.length > 0 ? (
            <>
              <h3>Coordinators:</h3>
              <ul>
                {coordinators.map((coord, index) => (
                  <li key={index}>
                    {coord.name} - {coord.phone}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p>No coordinators available.</p>
          )}
          <div className={styles.buttonContainer}>
          <a href={event.googleFormLink} target="_blank" rel="noopener noreferrer" className={styles.register}>
          <FiEdit size={20} />
            Register
          </a>
          <button className={styles.share} onClick={handleShare}>
              <FiShare2 size={20} /> Share
            </button>
          </div>
         </div>
       </div>
       {showPopup && (
          <div className={styles.popup}>
            Link copied to clipboard
          <div className={styles.timeline}></div>
      </div>
      )}
      <Footer className= {styles.footer}/>
    </div>
  );
};

export default EventDetails;