import React, { useContext, useEffect } from "react";

import styles from "../Home/Home.module.css";
import { FaFish } from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import Zoekvis from "../../components/SearchingStuff/Zoekvis";
import Zoekvisplek from "../../components/SearchingStuff/Zoekvisplek";

function Zoeken() {

  useEffect(() => {
    document.title = "Zoeken";
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
          <h1>ZOEKEN</h1>
          <br />

          <h3>Zoek hier op visplekken of vissen</h3>
          <h4>Je kan in deze versie alleen op stad zoeken in visplekken</h4>
          <br />

          {/*<label>Zoek op steden</label>*/}

          <Zoekvisplek/>
          <button className={styles.buttoncontainer}>Zoek visplek</button>
          <br/>

          <label>Zoek op vissoorten</label>

          <Zoekvis/>
          <button className={styles.buttoncontainer}>Zoek vis</button>
          <br/>
        </div>
      </div>
    </div>
  );
}

export default Zoeken;
