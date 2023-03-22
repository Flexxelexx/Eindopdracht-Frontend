import React, {useContext} from "react";
import {NavLink} from "react-router-dom";

import styles from "../Navbar/Navbar.module.css";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import {ThemeContext} from "../ThemeContext/ThemeContext";
import {AuthContext} from "../../context/AuthContext";


function Navbar() {
    const {kleuren} = useContext(ThemeContext);

    const {isAuthenticated, logoutFunction} = useContext(AuthContext)


    async function clickLogout() {
        logoutFunction();
    }

    return (
        <nav>
            <ul className={styles.navlist}>

                <li>
                    <NavLink
                        to="/"
                        style={{color: kleuren}}
                        className={styles.navbuttons}
                    >
                        <i className="fa-solid fa-home-user fa-2x"/>
                        Home
                    </NavLink>
                </li>

                {isAuthenticated ? (
                    <>
                <li>
                    <NavLink
                        to="/zoeken"
                        style={{color: kleuren}}
                        className={styles.navbuttons}
                    >
                        <i className="fa-solid fa-magnifying-glass-location fa-2x"/>
                        Zoeken
                    </NavLink>
                </li>
                    </>
                ) : (
                    <>
                    <li>
                        <NavLink
                            to="/login"
                            style={{color: kleuren}}
                            className={styles.navbuttons}
                        >
                            <i className="fa-solid fa-magnifying-glass-location fa-2x"/>
                            Zoeken
                        </NavLink>
                    </li>
                    </>
                )}

                {isAuthenticated ? (
                    <>
                <li>
                    <NavLink
                        to="/upload"
                        style={{color: kleuren}}
                        className={styles.navbuttons}
                    >
                        <i className="fa-solid fa-upload fa-2x"/> Uploads
                    </NavLink>
                </li>
                    </>
                ) : (
                    <>
                    <li>
                        <NavLink
                            to="/login"
                            style={{color: kleuren}}
                            className={styles.navbuttons}
                        >
                            <i className="fa-solid fa-upload fa-2x"/> Uploads
                        </NavLink>
                    </li>
                    </>
                )}

                {isAuthenticated ? (
                    <>
                <li>
                    <NavLink
                        to="/account"
                        style={{color: kleuren}}
                        className={styles.navbuttons}
                    >
                        <i className="fa-regular fa-id-card fa-2x"/> Account
                    </NavLink>
                </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink
                                to="/login"
                                style={{color: kleuren}}
                                className={styles.navbuttons}
                            >
                                <i className="fa-regular fa-id-card fa-2x"/> Account
                            </NavLink>
                        </li>
                    </>
                )}
                <li>
                    <NavLink
                        to="/contact"
                        style={{color: kleuren}}
                        className={styles.navbuttons}
                    >
                        <i className="fa-solid fa-circle-info fa-2x"/> Contact
                    </NavLink>
                </li>

                <li>
                    <NavLink
                        to="/register"
                        style={{color: kleuren}}
                        className={styles.navbuttons}
                    >
                        <i className="fa-solid fa-hippo fa-2x"/> Register
                    </NavLink>
                </li>

                    {isAuthenticated ? (
                            <>
                            <li>
                            <NavLink
                                to="/login"
                                style={{color: kleuren}}
                                className={styles.navbuttons}
                                onClick={clickLogout}
                            >
                                <i className="fa-solid fa-download fa-2x"/>  Logout
                            </NavLink>
                            </li>
                            </>
                            ) : (
                            <>
                                <li>
                                <NavLink
                                    to="/login"
                                    style={{color: kleuren}}
                                    className={styles.navbuttons}
                                >
                                    <i className="fa-solid fa-download fa-2x"/> Login
                                </NavLink>
                            </li>
                            </>
                            )}
                        <li>
                            <SwitchTheme/>
                        </li>
                        </ul>
                        </nav>
                        );
                    }

                    export default Navbar;
