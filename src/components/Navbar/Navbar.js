import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import styles from '../Navbar/Navbar.module.css'

function Navbar() {


    return (
        <nav>
            <ul className={styles.navlist}>
                <li>
                    <NavLink to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/fishingspots'>Fishingspots</NavLink>
                </li>
                <li>
                    <NavLink to='/upload'>Upload</NavLink>
                </li>
                <li>
                    <NavLink to='/account'>Account</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
