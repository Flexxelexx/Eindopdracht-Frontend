import React, { useContext, useEffect, useState } from "react";

import styles from "./Admin.module.css";
import { ThemeContext } from "../../components/ThemeContext/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Button from "../../components/Button/Button";

function AdminPortal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginFunction, logoutFunction } = useContext(AuthContext);
  const { boxjes } = useContext(ThemeContext);

  const { isAuthenticated, user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Admin portal";
  }, []);

  async function clickHandler() {
    const userData = JSON.stringify({
      username: `${email}`,
      password: `${password}`,
    });
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        userData,
        customConfig
      );
      loginFunction(response.data);
    } catch (e) {
      console.error(e);
      alert(
        "*blub* Oeps, deze combinatie klopt niet. Probeer het opnieuw. *blub*"
      );
    }
  }

  async function clickLogout() {
    logoutFunction();
  }

  return (
    <>
      <div className="outer-container">
        <div className="inner-container">
          <div style={{ WebkitBoxShadow: boxjes }} className={styles.loginForm}>
            {isAuthenticated ? (
              <>
                <form className={styles.loggedInForm}>
                  <p>Je bent nu ingelogd met het account:</p>
                  <br />
                  <p>{user.username} (de admin)</p>
                  <br />
                  <Button
                    type="button"
                    clickHandler={clickLogout}
                  value="logout"/>

                </form>
              </>
            ) : (
              <>
                <form className={styles.notLoggedInForm}>
                  <h2>Admin login</h2>

                  <span>Gebruikersnaam: </span>
                  <input
                    className="login-input"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="gebruikersnaam.."
                  />
                  <span>Wachtwoord: </span>
                  <input
                    className="login-input"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="wachtwoord.."
                  />
                  <br />
                  <Button
                      type="button"
                      clickHandler={clickLogout}
                      value="login"/>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminPortal;
