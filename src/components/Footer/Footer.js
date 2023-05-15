import React from "react";
import styles from "../Footer/Footer.module.css";
import Navlink from "../Navlink/Navlink";

function Footer() {
  return (
    <div className="outer-container">
      <div className="inner-container" id={styles.footer}>
        <div className={styles.extendednav}>
          <i className="fa-solid fa-cog fa-spin" />

          <Navlink
          page="/algemene-voorwaarden"
          value="Algemene voorwaarden"/>

          <Navlink
              page="/over-ons"
              value="Over ons"/>

          <i className="fa-solid fa-cog fa-spin fa-spin-reverse" />
        </div>
        <div className={styles.extendednav}>
          <i className="fa-solid fa-cog fa-spin" />
          Alex Kooij - Eindopdracht Novi Fullstack Bootcamp 2022™
          <i className="fa-solid fa-cog fa-spin fa-spin-reverse" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
