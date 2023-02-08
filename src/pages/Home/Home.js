import React, {useEffect} from "react";

import styles from '../Home/Home.module.css'
import {FaFish} from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

function Home() {

    useEffect(() => {
        document.title = "Home FISHiT";
    }, []);

    return (
        <>
            <div>
                <form className={styles.loginform}>
                        <h5>LOG IN</h5>
                        <div className={styles.fishLogo}><FaFish/></div>


                            <label>Email</label>
                            <input type="text" name="uname" placeholder="Vul hier je email in..."/>
                            <label>Wachtwoord</label>
                            <input type="password" name="wachtwoord"
                                   placeholder="Vul hier je wachtwoord in..."/>


                        <div className={styles.loginbuttons}>
                            <button>Verzenden</button>
                            <button>Wachtwoord vergeten?</button>
                            <button>Nog geen lid? Registreer jezelf!</button>
                        </div>
                </form>
            </div>

            <div className={styles.searchbar}>
                <SearchBar/>
            </div>
        </>
    )
        ;
}

export default Home;


