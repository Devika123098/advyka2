import React, { useEffect, useState } from "react";

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Define the float animation dynamically
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
      @keyframes float {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          transform: translateY(-100vh) translateX(calc(-50vw + 100% * var(--random-x)));
          opacity: 0;
        }
      }
    `, styleSheet.cssRules.length);

    const createParticles = () => {
      const particleCount = 50; // Number of particles
      const newParticles = [];

      for (let i = 0; i < particleCount; i++) {
        const randomX = Math.random(); // Random horizontal position (0 to 1)
        const randomDelay = Math.random() * 5; // Random delay for animation
        const randomDuration = 5 + Math.random() * 10; // Random duration for animation

        newParticles.push(
          <div
            key={i}
            style={{
              position: "absolute",
              width: "2px",
              height: "2px",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              left: `${randomX * 100}%`,
              animation: `float ${randomDuration}s linear ${randomDelay}s infinite`,
              "--random-x": randomX, // Pass randomX to CSS
            }}
          />
        );
      }

      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {particles}
    </div>
  );
};

export default Particles;