import React, { useEffect } from "react";

import styles from "../Account/Account.module.css";
import { FaFish } from "react-icons/fa";

function Register() {
  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <>
      <div className="outer-container">
        <div className="inner-container" id={styles.content}>
          <div>
            <form className={styles.loginForm}>
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
