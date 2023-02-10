import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import styles from "../Navbar/Navbar.module.css";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { ThemeContext } from "../ThemeContext/ThemeContext";

function Navbar() {
  const { kleuren } = useContext(ThemeContext);

  return (
    <nav>
      <ul className={styles.navlist}>
        <li>
          <NavLink
            to="/"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-house-user fa-2x"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fishingspots"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-fish-fins fa-2x"></i> Fishingspots
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/upload"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-upload fa-2x"></i> Upload
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-regular fa-id-card fa-2x"></i> Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-circle-info fa-2x"></i> Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-arrow-up-from-bracket fa-2x"></i> Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-arrow-up-from-bracket fa-2x"></i> Admin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-arrow-up-from-bracket fa-2x"></i> Register
          </NavLink>
        </li>
        <li>
          <SwitchTheme />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
