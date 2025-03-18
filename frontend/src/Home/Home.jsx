import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Home.module.css";
import videoDesktop from "../assets/background-video.webm";
import videoMobile from "../assets/background-mobile.webm";
import Navbar from "../Navbar/Navbar";
import logo from "../assets/advykabg.webp";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import Pastevents from "../PastEvents/Pastevents.jsx";
import Footer from "../Footer/Footer.jsx";
import poster from "../assets/poster.webp";
import Partners from "../Partners/Partners.jsx";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const videoRef = useRef(null);
  const aboutRef = useRef(null);
  const footerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToFooter = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = isMobile ? videoMobile : videoDesktop;
    video.load(); 
    video.play();

    const targetDate = new Date("March 21, 2025 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDiff = targetDate - now;

      if (timeDiff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeDiff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  const textLines = ["Unleash the Eminence of Ecstasy", "On March 21, 22 & 23"];
  const [typedText, setTypedText] = useState(["", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (lineIndex >= textLines.length) return;

    if (charIndex < textLines[lineIndex].length) {
      setTimeout(() => {
        setTypedText((prev) => {
          const newText = [...prev];
          newText[lineIndex] = newText[lineIndex] + textLines[lineIndex][charIndex];
          return newText;
        });
        setCharIndex(charIndex + 1);
      }, 100);
    } else {
      setTimeout(() => {
        setLineIndex((prev) => prev + 1);
        setCharIndex(0);
      }, 1000);
    }
  }, [charIndex, lineIndex]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={styles.video}
          preload="auto"
          autoPlay
          muted
          playsInline
          poster={poster}
          loop={false}
        >
        </video>
      </div>
      <Navbar scrollToAbout={scrollToAbout} scrollToFooter={scrollToFooter} />
      <div className={styles.homeContainer}>
        <div className={styles.content}>
          <div className={styles.light}></div>
          <div className={styles.title}>
            <div className={styles.titledivi}>
              <h2 className={styles.titleName}>Advyka'25</h2>
              <p className={styles.titleDesc}>
                {typedText[0]}
                {lineIndex === 0 && <span className={styles.cursor} style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>}
              </p>
              {lineIndex > 0 && (
                <p className={styles.titleDesc}>
                  {typedText[1]}
                  {lineIndex === 1 && <span className={styles.cursor} style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>}
                </p>
              )}
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
          <div className={styles.spacer}></div>
          <div className={styles.carousel}>
            <h2>Proshows</h2>
            <Carousel />
          </div>
          <div className={styles.pastgallery}>
            <Pastevents />
          </div>
          <div className={styles.partners}>
            <Partners/>
          </div>
          <div ref={footerRef} className={styles.footer}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;