import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Home.module.css';
import videoSrc from '../assets/background-video.mp4';
import Navbar from '../Navbar/Navbar';
import logo from '../assets/advykabg.webp';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const videoRef = useRef(null);

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
                          <p className={styles.titleDesc}>Unleash the Eminence of Esctacy <br />On March 21 and 22</p>
                        </div>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </div>
                    
                    <div className={styles.countdownBox}>
                        <div className={styles.countdownItem}>
                            <div className={styles.countdownNumber}>21</div>
                            <div className={styles.countdownLabel}>Days</div>
                        </div>
                        <div className={styles.countdownItem}>
                            <div className={styles.countdownNumber}>12</div>
                            <div className={styles.countdownLabel}>Hours</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
