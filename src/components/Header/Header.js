import React from 'react';
import styles from "../InnerContainer/Innercontainer.module.css";
import mainLogo from "../../assets/mainLogo.png";
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className="outer-container">
            <div className="inner-container">
                <div className={styles.mainlogofitment}>
                    <img src={mainLogo} alt="logo" className={styles.mainlogo}/>
                </div>
                <div className={styles.navbarfitment}>
                    <Navbar/>
                </div>
            </div>
        </div>
    );
};

export default Header;