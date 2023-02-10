import React, { useEffect } from "react";
import styles from "../Visplekken/Visplekken.module.css";
import { FaFish } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

function Visplekken() {
  useEffect(() => {
    document.title = "Visplekken";
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
          <h1>Zoek hieronder op stekken️</h1>
          <h3>BLABLABLA CONTENT</h3>
          <h3>BLABLABLA CONTENT</h3>
          <h3>BLABLABLA CONTENT</h3>
          <h3>BLABLABLA CONTENT</h3>

          <div>
            <input
              className="searchinput"
              type="search"
              name="search"
              placeholder="Waar zoek je naar?"
            />
            <button className={styles.buttoncontainer}>Zoeken!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visplekken;
