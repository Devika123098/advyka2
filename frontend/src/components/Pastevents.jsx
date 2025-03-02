import React from 'react';
import styles from './PastEvents.module.css';

const Pastevents = ({ images = [] }) => {
  // Default images in case no images are provided
  const defaultImages = [
    'https://via.placeholder.com/350x250?text=Image+1',
    'https://via.placeholder.com/350x250?text=Image+2',
    'https://via.placeholder.com/350x250?text=Image+3',
    'https://via.placeholder.com/350x250?text=Image+4',
    'https://via.placeholder.com/350x250?text=Image+5',
    'https://via.placeholder.com/350x250?text=Image+6',
    'https://via.placeholder.com/350x250?text=Image+7',
    'https://via.placeholder.com/350x250?text=Image+8',
    'https://via.placeholder.com/350x250?text=Image+9',
    'https://via.placeholder.com/350x250?text=Image+10',
    'https://via.placeholder.com/350x250?text=Image+11',
  ];


  const allImages = images.length >= 8 ? images : defaultImages;


  const duplicatedImages = [...allImages, ...allImages];

  return (
    <div className={styles.sliderContainer}>
      <h2 className={styles.pastHeading}>
        <center>A Glimpse of Advyka'24</center>
      </h2>
      <div className={styles.sliderRow}>
        <div className={styles.slideTrack}>
          {duplicatedImages.map((src, index) => (
            <div className={styles.slide} key={index}>
              <img src={src} alt={`Slide ${index + 1}`} className={styles.slideImage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pastevents;
