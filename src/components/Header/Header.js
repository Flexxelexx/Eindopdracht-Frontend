import React from 'react';
import styles from '../Header/Header.module.css'
import mainLogo from "../../assets/mainLogo.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <nav className={styles.navbar}>
                <div className={styles.logocontainer}>
                    <img src={mainLogo} alt="logo" className={styles.mainlogo}/>
                </div>
                <div>
                    <Navbar/>
                </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;