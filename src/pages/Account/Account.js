import React, {useEffect} from "react";

import styles from '../Account/Account.module.css'

import {FaFish} from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

function Account() {

    useEffect(() => {
        document.title = "Account";
    }, []);

    return (
        <>
            <div className='outer-container'>
                <div className="inner-container" id={styles.content}>
                    <div>
                    <form className={styles.loginForm}>
                        <h5>Welkom terug !name </h5>
                        <div className={styles.fishLogo}><FaFish/></div>
                        <li>!totaal gevangen! : xxx</li>
                        <button className={styles.buttoncontainer}>Naar je portfolio</button>
                        <button className={styles.buttoncontainer}>Uitloggen</button>
                    </form>


                    <div className={styles.searchbar}>
                        <SearchBar/>
                    </div>
                </div>

                <div className={styles.midcontent}>

                    <h3>Account</h3>
                    <div id={styles.container}>
                        <div id={styles.name}>
                        </div>
                    </div>
                    <label>
                        Naam:
                    </label>
                    <input type="text" placeholder="Vul hier je naam in..."
                    />
                    <label>
                        Profielnaam
                    </label>
                    <input type="text" placeholder="Vul hier je profielnaam in..."
                    />
                    <label>
                        Email
                    </label>
                    <input type="text" placeholder="Vul hier je email in..."
                    />
                    <label>
                        Locatie:
                    </label>
                    <input type="text" placeholder="Vul hier de locatie in..."
                    />
                    <button className={styles.buttoncontainer}>
                        Kies bestand voor je profielfoto
                    </button>
                    <button className={styles.buttoncontainer}>
                        Verzenden
                    </button>
                </div>

            </div>
            </div>

        </>
    )
        ;
}

export default Account;