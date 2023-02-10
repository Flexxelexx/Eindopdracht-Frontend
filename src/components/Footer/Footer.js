import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Footer/Footer.module.css";

function Footer() {
  return (
    <footer className="outer-container">
      <div className="inner-container" id={styles.footer}>
        <div className={styles.extendednav}>
          <i className="fa-solid fa-cog fa-spin" />
          <NavLink to="/algemene-voorwaarden" className={styles.navbuttons}>
            Algemene Voorwaarden
          </NavLink>
          <NavLink to="/over-ons" className={styles.navbuttons}>
            Over ons
          </NavLink>
          <i className="fa-solid fa-cog fa-spin fa-spin-reverse" />
        </div>
        <div className={styles.extendednav}>
          <i className="fa-solid fa-cog fa-spin" />
          Alex Kooij - Eindopdracht Novi Fullstack Bootcamp 2022™
          <i className="fa-solid fa-cog fa-spin fa-spin-reverse" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
