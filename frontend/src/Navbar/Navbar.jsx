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

          <>
            <li>
              <Link to="/merchandise">Merchandise</Link>
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
 


      </ul>

      <div className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}>
 
          <>
            <Link to="/merchandise" onClick={() => setMenuOpen(false)}>Merchandise</Link>
            <Link to="/proshows" onClick={() => setMenuOpen(false)}>Proshows</Link>
            <Link to="/events" onClick={() => setMenuOpen(false)}>Events</Link>
            <a href="#" onClick={(e) => { e.preventDefault(); setMenuOpen(false); scrollToFooter(); }}>Contact</a>
          </>

      </div>
    </nav>
  );
};

export default Navbar;
