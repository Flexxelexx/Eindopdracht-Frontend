import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import styles from "../Navbar/Navbar.module.css";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import Navlink from "../Navlink/Navlink";

function Navbar() {
  const { kleuren } = useContext(ThemeContext);

  const { isAuthenticated, logoutFunction } = useContext(AuthContext);

  async function clickLogout() {
    logoutFunction();
  }

  return (
    <nav>
      <ul className={styles.navlist}>
        <li>

          <Navlink
          page="/"
          symbol="fa-solid fa-home-user fa-2x"
          value="Home"
          />

        </li>

        {isAuthenticated ? (
          <>
            <li>

              <Navlink
                  page="/zoeken"
                  symbol="fa-solid fa-magnifying-glass-location fa-2x"
                  value="Zoeken"
              />

            </li>
          </>
        ) : (
          <>
            <li>

              <Navlink
                  page="/login"
                  symbol="fa-solid fa-magnifying-glass-location fa-2x"
                  value="Zoeken"
              />

            </li>
          </>
        )}

        {isAuthenticated ? (
          <>
            <li>

              <Navlink
                  page="/upload"
                  symbol="fa-solid fa-upload fa-2x"
                  value="Uploads"
              />

            </li>
          </>
        ) : (
          <>
            <li>


              <Navlink
                  page="/login"
                  symbol="fa-solid fa-upload fa-2x"
                  value="Uploads"
              />

            </li>
          </>
        )}

        {isAuthenticated ? (
          <>
            <li>

              <Navlink
                  page="/account"
                  symbol="fa-regular fa-id-card fa-2x"
                  value="Account"
              />

            </li>
          </>
        ) : (
          <>
            <li>

              <Navlink
                  page="/login"
                  symbol="fa-regular fa-id-card fa-2x"
                  value="Account"
              />

            </li>
          </>
        )}
        <li>

          <Navlink
              page="/contact"
              symbol="fa-solid fa-circle-info fa-2x"
              value="Contact"
          />

        </li>

        <li>

          <Navlink
              page="/register"
              symbol="fa-solid fa-hippo fa-2x"
              value="Register"
          />

        </li>

        {isAuthenticated ? (
          <>
            <li>

              <Navlink
                  page="/login"
                  symbol="fa-solid fa-download fa-2x"
                  value="Logout"
                  onclick={clickLogout}
              />

            </li>
          </>
        ) : (
          <>
            <li>

              <Navlink
                  page="/login"
                  symbol="fa-solid fa-download fa-2x"
                  value="Login"
              />

            </li>
          </>
        )}
        <li>
          <SwitchTheme />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
