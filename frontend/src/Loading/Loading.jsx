import React, { useEffect, useState } from "react";
import styles from "./Loading.module.css";
import logo from "../assets/advykabg.webp";
import { useLocation } from "react-router-dom";

const Loading = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showText, setShowText] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setShowText(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(textTimer);
    };
  }, [location.key]);

  return (
    <>
      {isLoading && (
        <div className={styles.loadingContainer}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="Loading" className={styles.logo} />
            {showText && (
              <div className={styles.textContainer}>
                <span className={styles.text}>The Eminence of Ecstasy</span>
              </div>
            )}
          </div>
        </div>
      )}
      {!isLoading && children}
    </>
  );
};

export default Loading;