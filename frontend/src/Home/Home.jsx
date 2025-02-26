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
                          <h2 className={styles.titleName}>Advyka</h2>
                          <p className={styles.titleDesc}>Unleash the Eminence of <br />Esctacy</p>
                        </div>
                        <img src={logo} alt="logo" className={styles.logo} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
