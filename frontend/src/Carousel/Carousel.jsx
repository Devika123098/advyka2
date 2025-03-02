import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { IoTicketSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Carousel.module.css";
import proshow1 from "../assets/proshow1.webp";
import proshow2 from "../assets/proshow2.webp";
import proshow3 from "../assets/proshow3.webp";

const proshows = [
  { id: 1, image: proshow1, date: "March 21, 2025", link: "/proshows" },
  { id: 2, image: proshow2, date: "March 22, 2025", link: "/proshows" },
  { id: 3, image: proshow3, date: "March 23, 2025", link: "/proshows" }
];

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    centerMode: true, // Ensures middle card stays in focus
    centerPadding: "0",
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: false,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }]
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {proshows.map((show) => (
          <div key={show.id} className={`${styles.carouselCard}`}>
            <img src={show.image} alt={`Proshow ${show.id}`} className={styles.image} />
            <div className={styles.infoOverlay}>
              <p className={styles.eventDate}>{show.date}</p>
              <Link to={show.link} className={styles.ticketButton}>
                <IoTicketSharp className={styles.ticketIcon} /> Get Tickets
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
