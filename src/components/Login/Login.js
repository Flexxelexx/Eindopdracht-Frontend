import React, {useEffect, useState} from "react";
import './Login.module.css'
import {FaFish} from "react-icons/fa";
import {Link, NavLink} from "react-router-dom";

import styles from '../Login/Login.module.css'


function Login() {

    useEffect(() => {
        document.title = "Login";
    }, []);

    return (

        <div className='outer-container'>
            <div className="inner-container" id={styles.formposition}>
                <div>
                    <form className={styles.midcontent}>
                        <h5>Om verder te kunnen gaan dien je in te loggen!</h5>
                        <div className={styles.fishLogo}><FaFish/></div>

                        <label>Email:
                        <input className='emailInput'
                               type="text"
                               placeholder="Vul hier je email in..."/>
                        </label>
                        <label>Wachtwoord:
                        <input className='passwordInput'
                               type="password"
                               placeholder="Vul hier je wachtwoord in..."/>
                        </label>
                        <NavLink to='/' className={styles.buttoncontainer}>Verzenden</NavLink>
                        <button type="submit" className={styles.buttoncontainer}>Verzenden?</button>
                        <button type="submit" className={styles.buttoncontainer}>Wachtwoord vergeten?</button>
                        <button type="submit" className={styles.buttoncontainer}>Nog geen lid? Registreer jezelf!</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;



