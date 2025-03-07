import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../assets/advykabg.webp";

const Navbar = ({ scrollToAbout, scrollToFooter }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isProshowsPage = location.pathname === "/proshows";
  const isEventsPage = location.pathname === "/events";
  const isHomePage = location.pathname === "/";

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className={styles.navLinks}>
        {isHomePage && (
          <>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToAbout(); }}>About</a>
            </li>
            <li>
              <Link to="/proshows">Proshows</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToFooter(); }}>Contact</a>
            </li>
          </>
        )}
        {isProshowsPage && (
          <>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToFooter(); }}>Contact</a>
            </li>
          </>
        )}
        {isEventsPage && (
          <>
            <li>
              <Link to="/proshows">Proshows</Link>
            </li>
            <li>
              <a href="#" onClick={(e) => { e.preventDefault(); scrollToFooter(); }}>Contact</a>
            </li>
          </>
        )}
      </ul>

      <div className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
        {isHomePage && (
          <>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToAbout(); }}>About</a>
            <Link to="/proshows" onClick={() => setMenuOpen(false)}>Proshows</Link>
            <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToFooter(); }}>Contact</a>
          </>
        )}
        {isProshowsPage && (
          <>
            <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToFooter(); }}>Contact</a>
          </>
        )}
        {isEventsPage && (
          <>
            <Link to="/proshows" onClick={() => setMenuOpen(false)}>Proshows</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToFooter(); }}>Contact</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
