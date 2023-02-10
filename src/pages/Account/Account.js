import React, { useContext, useEffect } from "react";

import styles from "../Account/Account.module.css";

import { FaFish } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";

function Account() {
  useEffect(() => {
    document.title = "Account";
  }, []);

  const { boxjes } = useContext(ThemeContext);

  return (
    <>
      <div className="outer-container">
        <div className="inner-container" id={styles.content}>
          <div>
            <form style={{ boxShadow: boxjes }} className={styles.loginForm}>
              <h5>LOG IN</h5>
              <div className={styles.fishLogo}>
                <FaFish />
              </div>

              <label>Email</label>
              <input
                type="text"
                name="email"
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
            <h3>Account</h3>
            <div id={styles.container}>
              <div id={styles.name}></div>
            </div>
            <label>Naam:</label>
            <input type="text" placeholder="!content.name" />
            <label>Profielnaam</label>
            <input type="text" placeholder="!content.username" />
            <label>Email</label>
            <input type="text" placeholder="!content.email" />
            <label>Locatie:</label>
            <input type="text" placeholder="!content.city" />

            <button className={styles.buttoncontainer}>
              Kies bestand voor je profielfoto
            </button>

            <button className={styles.buttoncontainer}>Verzenden</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
