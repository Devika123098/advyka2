import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Home.module.css';
import videoSrc from '../assets/background-video.mp4';
import Navbar from '../Navbar/Navbar';
import logo from '../assets/advykabg.webp';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const videoRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

    useEffect(() => {
        const video = videoRef.current;
        video.pause();

        gsap.to(video, {
            currentTime: video.duration || 5,
            ease: 'power1.out',
            scrollTrigger: {
                trigger: video,
                start: 'top top',
                end: 'bottom top',
                scrub: 1,
                pin: true
            },
        });

        const targetDate = new Date('March 21, 2025 00:00:00').getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const timeDiff = targetDate - now;

            if (timeDiff <= 0) {
                setTimeLeft({ days: 0, hours: 0 });
            } else {
                const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

                setTimeLeft({ days, hours });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 3600000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className={styles.videoContainer}>
                <video ref={videoRef} className={styles.video} muted>
                    <source src={videoSrc} type="video/mp4" />
                </video>
            </div>
            <Navbar />
            <div className={styles.homeContainer}>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <div>
                            <h2 className={styles.titleName}>Advyka'25</h2>
                            <p className={styles.titleDesc}>Unleash the Eminence of Ecstasy <br />On March 21 and 22</p>
                        </div>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
