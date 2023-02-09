import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import styles from '../Navbar/Navbar.module.css'
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import {ThemeContext} from "../ThemeContext/ThemeContext";

function Navbar() {

    const {kleur, kleuren, knopkleur} = useContext(ThemeContext)



    return (

        <nav>
            <ul className={styles.navlist}>
                <li>
                    <NavLink to='/' style={{color: kleuren}} className={styles.navbuttons}><i
                        className="fa-solid fa-house-user"></i> Home</NavLink>
                </li>
                <li>
                    <NavLink to='/fishingspots' style={{color: kleuren}} className={styles.navbuttons}><i
                        className="fa-solid fa-fish-fins"></i> Fishingspots</NavLink>
                </li>
                <li>
                    <NavLink to='/upload' style={{color: kleuren}} className={styles.navbuttons}><i
                        className="fa-solid fa-upload"></i> Upload</NavLink>
                </li>
                <li>
                    <NavLink to='/account' style={{color: kleuren}} className={styles.navbuttons}><i
                        className="fa-regular fa-id-card"></i> Account</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' style={{color: kleuren}} className={styles.navbuttons}><i
                        className="fa-solid fa-circle-info"></i> Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/login' style={{color: kleuren}} className={styles.navbuttons}><i
                        className="fa-solid fa-arrow-up-from-bracket"></i> Login</NavLink>
                </li>
                <li>
                    <SwitchTheme/>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
