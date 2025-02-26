import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Home.module.css';
import videoSrc from '../assets/background-video.mp4';

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

            <div className={styles.homeContainer}>
                <div className={styles.content}>
                    <h1>Welcome to Home Page</h1>
                </div>
            </div>

        </>
    );
};

export default Home;
