import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Get in touch</h3>
          <p className={styles.footerText}>advyka@gmail.com</p>
          <div className={styles.socialIcons}>
            <a href="http://instagram.com/advyka.cep/" aria-label="Instagram">
              <FaInstagram className={styles.icon} />
            </a>
            <a href="https://www.whatsapp.com/channel/0029VbA6MtbHgZWTu5uDfw2l" aria-label="WhatsApp">
              <FaWhatsapp className={styles.icon} />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <FaLinkedin className={styles.icon} />
            </a>
          </div>
        </div>

        <div className={styles.verticalBar}></div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Home</h3>
          <ul className={styles.footerList}>
            <li><Link>Team</Link></li>
            <li><Link>Sponsors</Link></li>
          </ul>
        </div>

        <div className={styles.verticalBar}></div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Events</h3>
          <ul className={styles.footerList}>
            <li><Link>Auto Show</Link></li>
            <li><Link>Competitions & Games</Link></li>
            <li><Link>Workshops</Link></li>
          </ul>
        </div>

        <div className={styles.verticalBar}></div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerHeading}>Advyka Proshows</h3>
          <ul className={styles.footerList}>
            <li><Link>Link</Link></li>
            <li><Link>Transportation</Link></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.footerText}>©2026 · Advyka CEP</p>
        <p className={styles.footerText}>Terms & Conditions · Privacy</p>
      </div>
    </footer>
  );
};

export default Footer;