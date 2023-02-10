import React, { useContext, useEffect } from "react";

import styles from "../Home/Home.module.css";
import { FaFish } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

import photo from "../../assets/4.jpg";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";

function Home() {
  useEffect(() => {
    document.title = "Home FISHiT";
  }, []);

  const { boxjes } = useContext(ThemeContext);

  return (
    <div className="outer-container">
      <div className="inner-container" id={styles.content}>
        <div>
          <form style={{ boxShadow: boxjes }} className={styles.loginform}>
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

          <div style={{ WebkitBoxShadow: boxjes }} className={styles.searchbar}>
            <SearchBar />
          </div>
        </div>

        <div style={{ WebkitBoxShadow: boxjes }} className={styles.welkom}>
          <h1>WELKOM BIJ FiSHiT!</h1>
          <br />
          <h3> Hier kan jij jouw vangsten opslaan!</h3>
          <h3>Je kan ook naar vangsten van andere mensen kijken.</h3>
          <br/>
          <h3>
            Vergeet niet eerst in te loggen zodat je optimaal gebruik kunt maken
            van de website!{" "}
          </h3>
          <br />
          <h2>Happy Hunting!</h2>
          <img className={styles.welkomphoto} src={photo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Home;
