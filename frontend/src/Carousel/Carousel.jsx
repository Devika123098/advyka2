import React from "react";
import Slider from "react-slick";
import { IoTicketSharp } from "react-icons/io5"; // Import ticket icon
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css"; 
import proshow1 from "../assets/proshow1.webp";

const proshows = [
  {
    id: 1,
    image: proshow1,
    date: "March 10, 2025",
    link: "/proshows",
  },
  {
    id: 2,
    image: proshow1,
    date: "March 11, 2025",
    link: "/proshows",
  },
  {
    id: 3,
    image: proshow1,
    date: "March 12, 2025",
    link: "/proshows",
  }
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {proshows.map((show) => (
          <div key={show.id} className={styles.carouselCard}>
            <img src={show.image} alt={`Proshow ${show.id}`} className={styles.image} />
            <div className={styles.infoOverlay}>
              <p className={styles.eventDate}>{show.date}</p>
              <button 
                onClick={() => window.location.href = show.link} 
                className={styles.ticketButton}
              >
                <IoTicketSharp className={styles.ticketIcon} /> Get Tickets
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
