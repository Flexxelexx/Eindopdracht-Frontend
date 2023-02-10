import React, { useContext, useEffect } from "react";

import styles from '../Register/Register.module.css'
import { FaFish } from "react-icons/fa";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";

function Register() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  const { boxjes } = useContext(ThemeContext);

  return (
    <>
      <div className="outer-container">
        <div className="inner-container" id={styles.content}>
          <div>
            <form style={{ boxShadow: boxjes }} className={styles.loginform}>
              <h3>Registreren</h3>

              <div className={styles.fishLogo}>
                <FaFish />
              </div>

              <label>Naam:</label>
              <input type="text" placeholder="Vul hier je naam in..." />
              <label>Profielnaam:</label>
              <input type="text" placeholder="Vul hier je profielnaam in..." />
              <label>Email:</label>
              <input type="text" placeholder="Vul hier je email in..." />
              <label>Locatie:</label>
              <input type="text" placeholder="Vul hier de locatie in..." />

              <button className={styles.buttoncontainer}>
                Kies bestand voor je profielfoto
              </button>
              <button className={styles.buttoncontainer}>Verzenden</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
