import React, {useEffect} from "react";

import styles from "../Account/Account.module.css";

import {FaFish} from "react-icons/fa";



function Account() {


    useEffect(() => {
        document.title = "Account";
    }, []);



    return (
        <>
            <div className="outer-container">
                <div className="inner-container" id={styles.content}>

                    <form className={styles.midcontent}>
                        <h3>Jouw Account</h3>
                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>

                        <label>Naam:</label>
                        <input
                            type="text"
                            placeholder="!content.name"/>

                        <label>Profielnaam</label>
                        <input
                            type="text"
                            placeholder="!content.username"/>

                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="!content.email"/>

                        <label>Locatie:</label>
                        <input
                            type="text"
                            placeholder="!content.city"/>

                        <button className={styles.buttoncontainer}>
                            Kies bestand voor je profielfoto
                        </button>

                        <button className={styles.buttoncontainer}>Verzenden</button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default Account;
