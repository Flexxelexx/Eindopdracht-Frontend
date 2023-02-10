import React, { useEffect } from "react";
import "./Login.module.css";
import { FaFish } from "react-icons/fa";

import styles from "../Login/Login.module.css";

function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <div className="outer-container">
      <div className="inner-container" id={styles.formposition}>
        <div>
          <form className={styles.midcontent}>
            <h3>Login</h3>
            <div className={styles.fishLogo}>
              <FaFish />
            </div>

            <label>Email:</label>
            <input
              className="emailInput"
              type="text"
              placeholder="Vul hier je email in..."
            />

            <label>Wachtwoord:</label>
            <input
              className="passwordInput"
              type="password"
              placeholder="Vul hier je wachtwoord in..."
            />

            <button type="submit" className={styles.buttoncontainer}>
              Verzenden
            </button>
            <button type="submit" className={styles.buttoncontainer}>
              Wachtwoord vergeten?
            </button>
            <button type="submit" className={styles.buttoncontainer}>
              Nog geen lid? Registreer jezelf!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
