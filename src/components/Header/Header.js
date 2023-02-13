import React  from "react";
import styles from "../Header/Header.module.css";
import mainLogo from "../../assets/mainLogo.png";
import Navbar from "../Navbar/Navbar";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className={styles.border}>
        <nav className={styles.navbar}>
          <div className={styles.logocontainer}>
            <Link to="/">
              <img
                src={mainLogo}
                alt="logo"
                to="/"
                className={styles.mainlogo}
              />
            </Link>
          </div>
          <div>
            <Navbar />
          </div>
        </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
