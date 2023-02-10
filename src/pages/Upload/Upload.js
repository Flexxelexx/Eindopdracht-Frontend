import React, { useEffect } from "react";
import "./Upload.module.css";
import { FaFish } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "../Upload/Upload.module.css";

export default function Upload() {
  useEffect(() => {
    document.title = "Upload";
  }, []);

  return (
    <div className="outer-container">
      <div className="inner-container" id={styles.content}>
        <div>
          <form className={styles.loginForm}>
            <h5>LOG IN</h5>
            <div className={styles.fishLogo}>
              <FaFish />
            </div>

            <label>Email</label>
            <input
              type="text"
              name="uname"
              placeholder="Vul hier je email in..."
            />
            <label>Wachtwoord</label>
            <input
              type="password"
              name="wachtwoord"
              placeholder="Vul hier je wachtwoord in..."
            />

            <button className={styles.buttoncontainer}>Verzenden</button>
            <button className={styles.buttoncontainer}>
              Wachtwoord vergeten?
            </button>
            <button className={styles.buttoncontainer}>
              Nog geen lid? Registreer jezelf!
            </button>
          </form>

          <div className={styles.searchbar}>
            <SearchBar />
          </div>
        </div>

        <div className={styles.midcontent}>
          <h3>Upload</h3>
          <span>x</span>
          <label>Soort Vis:</label>
          <input
            type="text"
            placeholder="Vul hier de soort vis in..."
            required
          />
          <label>Gewicht:</label>
          <input
            type="text"
            placeholder="Vul hier het gewicht in..."
            required
          />
          <label>Lengte:</label>
          <input type="text" placeholder="Vul hier de lengte in..." required />
          <label>Tijd:</label>
          <input type="text" placeholder="Vul hier de tijd in..." />
          <label>Kenmerken:</label>
          <input type="text" placeholder="Vul hier kenmerken in..." />
          <button className={styles.buttoncontainer}>Kies bestand</button>
          <button className={styles.buttoncontainer}>Verzenden</button>
        </div>
      </div>
    </div>
  );
}
