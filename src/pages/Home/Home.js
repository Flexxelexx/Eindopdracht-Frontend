import React, {useEffect} from "react";

import styles from '../Home/Home.module.css'
import {FaFish} from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {



    useEffect(() => {
        document.title = "Home FISHiT";
    }, []);

    return (

        <div className="outer-container">
            <div className="inner-container" id={styles.content}>
                <div>
                <form className={styles.loginform}>
                    <h5>LOG IN</h5>
                    <div className={styles.fishLogo}><FaFish/></div>


                    <label>Email</label>
                    <input type="text" name="uname" placeholder="Vul hier je email in..."/>
                    <label>Wachtwoord</label>
                    <input type="password" name="wachtwoord"
                           placeholder="Vul hier je wachtwoord in..."/>


                        <button className={styles.buttoncontainer}>Verzenden</button>
                        <button className={styles.buttoncontainer}>Wachtwoord vergeten?</button>
                        <button className={styles.buttoncontainer}>Nog geen lid? Registreer jezelf!</button>
                </form>


            <div className={styles.searchbar}>
                <SearchBar/>
            </div>
                </div>

            <div className={styles.welkom}>
                <h1>WELKOM BIJ FiSHiT!</h1>
                <h3> Hier kan jij jouw vangsten opslaan!</h3>
                <h3>Maar je kan ook naar vangsten van andere mensen kijken.</h3>
                <h3>Vergeet niet eerst in te loggen zodat je optimaal gebruik kunt maken van de website! </h3>
            </div>
            </div>
        </div>
    )
        ;
}

export default Home;


