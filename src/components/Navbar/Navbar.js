import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "../Navbar/Navbar.module.css";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import Dropdown from "../Dropdown/Dropdown";

function Navbar() {
  const { kleuren } = useContext(ThemeContext);

  const [click, setClick] = useState(true);
  const [dropdown, setDropdown] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <nav>
      <ul className={styles.navlist}>
        <li>
          <NavLink
            to="/"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-home-user fa-2x" />
            Home
          </NavLink>
        </li>

        <div className={click ? 'nav-menu active' : 'nav-menu'}>
          <li
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/zoeken"
              className={styles.navbuttons}
              onClick={closeMobileMenu}
            >
              <i className="fa-solid fa-magnifying-glass-location fa-2x" />
              Zoeken
            </Link>
            {dropdown && <Dropdown />}
          </li>
        </div>

        {/*<li>*/}
        {/*  <NavLink*/}
        {/*    to="/visplekken"*/}
        {/*    style={{ color: kleuren }}*/}
        {/*    className={styles.navbuttons}*/}
        {/*  >*/}
        {/*    <i className="fa-solid fa-water fa-2x" /> Fishingspots*/}
        {/*  </NavLink>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <NavLink*/}
        {/*    to="/vangsten"*/}
        {/*    style={{ color: kleuren }}*/}
        {/*    className={styles.navbuttons}*/}
        {/*  >*/}
        {/*    <i className="fa-solid fa-fish-fins fa-2x" /> Vangsten*/}
        {/*  </NavLink>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <NavLink*/}
        {/*    to="/vissen"*/}
        {/*    style={{ color: kleuren }}*/}
        {/*    className={styles.navbuttons}*/}
        {/*  >*/}
        {/*    <i className="fa-solid fa-fish fa-2x" /> Vissen*/}
        {/*  </NavLink>*/}
        {/*</li>*/}
        <li>
          <NavLink
            to="/upload"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-upload fa-2x" /> Upload
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/account"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-regular fa-id-card fa-2x" /> Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-circle-info fa-2x" /> Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-download fa-2x" /> Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/admin"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-lock fa-2x" /> Admin
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            style={{ color: kleuren }}
            className={styles.navbuttons}
          >
            <i className="fa-solid fa-hippo fa-2x" /> Register
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
