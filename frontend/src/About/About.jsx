import Cards from '../components/Cards'
import React, { useEffect, useRef } from 'react';
import rocketIcon from '../assets/icons8-rocket-50.png';
import trophyIcon from '../assets/icons8-trophy-64.png';

function About() {

    return (
        <section className="relative w-screen h-screen ">
            <div className="-z-10 absolute w-full h-full top-0 left-0 overflow-hidden ">
            </div>
            <div className="flex flex-col items-center">
            <h2 className="text-white text-4xl my-20">About Advyka</h2>
            <div className="flex gap-20 justify-between card-container mb-8">
                <Cards icon = {rocketIcon} title = "Innovation Hub" text = "Experience cutting-edge technology and innovative projects from talented students."/>
                <Cards  icon={trophyIcon} title = "Competitions" text = "Participate in exciting competitions and win amazing prizes worth ₹10,00,000+."/>
            </div>
            </div>
        </section>
    )
}

export default About