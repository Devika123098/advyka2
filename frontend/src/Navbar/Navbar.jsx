import { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../assets/advykabg.webp"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}><img src={logo} alt="" /></div>
      <ul className={styles.navLinks}>
        <li>About</li>
        <li>Proshows</li>
        <li>Events</li>
        <li>Contact</li>
      </ul>
      <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <a href="#">About</a>
          <a href="#">Proshows</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
