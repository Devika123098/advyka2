import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/advykabg.webp";

const Navbar = ({ scrollToAbout,scrollToFooter }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>

      <ul className={styles.navLinks}>
        {location.pathname !== "/proshows" && (
          <>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>
                About
              </a>
            </li>
            <li><Link to="/proshows">Proshows</Link></li>
          </>
        )}
        <li>Events</li>
        <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToFooter(); }}>
                Contact
              </a></li>
      </ul>

      <div
        className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        {location.pathname !== "/proshows" && (
          <>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToAbout(); }}>
              About
            </a>
            <Link to="/proshows">Proshows</Link>
          </>
        )}
        <a href="#">Events</a>
        <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToFooter(); }}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
