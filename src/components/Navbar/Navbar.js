import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import styles from "../Navbar/Navbar.module.css";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import SwitchingIcon from "../SwitchingIcon/SwitchingIcon";
import { ThemeContext } from "../ThemeContext/ThemeContext";

function Navbar() {
  const { kleuren, kleur , achtergrondkleuren} = useContext(ThemeContext);

  // function HomeIcon(props) {
  //   return <i className="fa-solid fa-house-user fa-2x"/>;
  // }
  //
  // function GhostIcon(props) {
  //   return <i className="fa-solid fa-ghost fa-2x"/>
  // }
  //
  // function Icon(props) {
  //   const isLicht = props.kleur;
  //   if (isLicht) {
  //     return <HomeIcon />;
  //   } else {
  //     return <GhostIcon />
  //   }
  // }

  return (
    <nav>
      <ul className={styles.navlist}>
        <li>
          <SwitchingIcon/>
        </li>
        <li>
          <NavLink
            to="/"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            {/*<Icon/>*/}
            <i className="fa-solid fa-home-user fa-2x"/>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fishingspots"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-fish-fins fa-2x"/> Fishingspots
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/upload"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-upload fa-2x"/> Upload
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-regular fa-id-card fa-2x"/> Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-circle-info fa-2x"/> Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-arrow-up-from-bracket fa-2x"/> Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-lock fa-2x"/> Admin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-hippo fa-2x"/> Register
          </NavLink>
        </li>
        <li className={styles.knopje}>
          <SwitchTheme />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
