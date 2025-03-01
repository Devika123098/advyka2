import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Home.module.css";
import videoSrc from "../assets/background-video.mp4";
import Navbar from "../Navbar/Navbar";
import logo from "../assets/advykabg.webp";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import  Pastevents  from "../components/Pastevents.jsx";



import car8 from "../assets/car8.jpg"




gsap.registerPlugin(ScrollTrigger);


const Home = () => {
  const videoRef = useRef(null);
  const aboutRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    video.pause();

    gsap.to(video, {
      currentTime: video.duration || 5,
      ease: "power1.out",
      scrollTrigger: {
        trigger: video,
        start: "top top",
        end: "+=3000px",//or bottom top if neded
        scrub: 1,
        pin: true,
        pinSpacing: false,
      },
    });

    const targetDate = new Date("March 21, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.videoContainer}>
        <video ref={videoRef} className={styles.video} muted>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <Navbar scrollToAbout={scrollToAbout} />
      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <div className={styles.title}>
            <div>
              <h2 className={styles.titleName}>Advyka'25</h2>
              <p className={styles.titleDesc}>Unleash the Eminence of Ecstasy <br />On March 21,22 & 23</p>
            </div>
            <div className={styles.spacer}></div>
            <img src={logo} alt="logo" className={styles.logo} />
          </div>

          <div className={styles.countdownBox}>
            <div className={styles.countdownItem}>
              <div className={styles.countdownNumber}>{timeLeft.days}</div>
              <div className={styles.countdownLabel}>Days</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownNumber}>{timeLeft.hours}</div>
              <div className={styles.countdownLabel}>Hours</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownNumber}>{timeLeft.minutes}</div>
              <div className={styles.countdownLabel}>Minutes</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownNumber}>{timeLeft.seconds}</div>
              <div className={styles.countdownLabel}>Seconds</div>
            </div>
          </div>

          <div ref={aboutRef}>
            <About />
          </div>
          <div className={styles.carousel}>
            <h2>Proshows</h2>
            <Carousel/>
          </div>
          <div className={styles.app}> 
            
            <h2><center>Past Events</center></h2>
      <Pastevents images={[car8,car8,car8,car8,car8,car8,car8,car8,car8,car8,car8,car8,car8,car8,car8]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
