// import Cards from './components/Cards'
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';gsap.registerPlugin(ScrollTrigger);
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import videoSrc from './assets/background-video.mp4';
// import rocketIcon from './assets/icons8-rocket-50.png';
// import trophyIcon from './assets/icons8-trophy-64.png';
// gsap.registerPlugin(ScrollTrigger);

// function About() {
//     const videoRef = useRef(null);

//     useEffect(() => {
//         const video = videoRef.current;
//         video.pause();

//         gsap.to(video, {
//             currentTime: video.duration || 5,
//             ease: 'power1.out',
//             scrollTrigger: {
//                 trigger: video,
//                 start: 'top top',
//                 end: 'bottom top',
//                 scrub: 1,
//                 pin: true
//             },
//         });
//     }, []);
//     return (
//         <section className="relative w-screen h-screen ">
//             <div className="-z-10 absolute w-full h-full top-0 left-0 overflow-hidden ">
//                 <video ref={videoRef} muted>
//                     <source src={videoSrc} type="video/mp4" />
//                 </video>
//             </div>
//             <div className="flex flex-col items-center">
//             <h2 className="text-white text-4xl my-20">About Advyka</h2>
//             <div className="flex gap-20 justify-between card-container mb-8">
//                 <Cards icon = {rocketIcon} title = "Innovation Hub" text = "Experience cutting-edge technology and innovative projects from talented students."/>
//                 <Cards  icon={trophyIcon} title = "Competitions" text = "Participate in exciting competitions and win amazing prizes worth ₹10,00,000+."/>
//             </div>
//             </div>
//         </section>relative
//     )
// }

// export default About