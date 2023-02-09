import React from "react";
import {NavLink} from "react-router-dom";
import styles from '../Footer/Footer.module.css'

function Footer() {
    return (
        <footer className="outer-container">
            <div className="inner-container" id={styles.footer}>
                <NavLink to='/algemene-voorwaarden' className={styles.navbuttons}><i
                    className="fa-brands fa-teamspeak"></i>  Algemene Voorwaarden</NavLink>
                <p>Alex Kooij - Eindopdracht Novi Fullstack Bootcamp 2022™</p>
            </div>
        </footer>
    );
}

export default Footer;