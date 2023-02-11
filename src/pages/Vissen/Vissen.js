import React, { useEffect } from "react";
import styles from "../Vangsten/Vangsten.module.css";
import { FaFish } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";
import StarRatingVangst from "../../components/StarRating/StarRatingVangst";
import StarRatingVissen from "../../components/StarRating/StarRatingVissen";

function Vissen() {
  useEffect(() => {
    document.title = "Vissen";
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
          <h1>Zoek op vissen</h1>
          <div>
            <input
              className="searchinput"
              type="search"
              name="search"
              placeholder="Waar zoek je naar?"
            />
            <button className={styles.buttoncontainer}>Zoeken!</button>
          </div>
          <h3>BLABLABLA CONTENT</h3>
          <h3>BLABLABLA CONTENT</h3>
          <h3>BLABLABLA CONTENT</h3>
          <h3>BLABLABLA CONTENT</h3>
          <StarRatingVissen />
        </div>
      </div>
    </div>
  );
}

export default Vissen;