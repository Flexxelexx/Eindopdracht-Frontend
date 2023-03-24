import React, {useState, useContext, useEffect} from "react";
import styles from "./Login.module.css"

import axios from "axios";
import {AuthContext} from "../../context/AuthContext"
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import {NavLink} from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {loginFunction, logoutFunction} = useContext(AuthContext);
    const {boxjes, kleuren} = useContext(ThemeContext);

    const {isAuthenticated, user} = useContext(AuthContext);


    useEffect(() => {
        document.title = "Login";
    }, []);



    async function clickHandler() {
        const userData = JSON.stringify({
            username: `${email}`,
            password: `${password}`
        })
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        try {
            const response = await axios.post("http://localhost:8080/login", userData, customConfig);
            loginFunction(response.data);
        } catch (e) {
            console.error(e);
            alert('*blub* Oeps, deze combinatie klopt niet. Probeer het opnieuw. *blub*')
        }
    }

    async function clickLogout() {
        logoutFunction();
    }

    return (

        <>
            <div className="outer-container">
                <div className="inner-container">
                    <div style={{WebkitBoxShadow: boxjes}} className={styles.loginForm}>
                        {isAuthenticated ? (
                            <>
                                <form className={styles.loggedInForm}>
                                <p>Je bent nu ingelogd met het account:</p>
                                    <br/>
                                    <p>{user.username}</p>
                                    <br/>
                                <NavLink
                                    to="/account"
                                    style={{color: kleuren}}
                                    className={styles.navbuttons}
                                    >
                                    Klik hier om naar jouw account te gaan!
                                </NavLink>
                                    <br/>
                                    <p>of</p>
                                    <br/>
                                    <NavLink
                                        to="/upload"
                                        style={{color: kleuren}}
                                        className={styles.navbuttons}
                                    >
                                        Ga snel naar uploaden!
                                    </NavLink>
                                    <br/>
                                <button type="button" className={styles.buttoncontainer} onClick={clickLogout}> logout
                                </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <form className={styles.notLoggedInForm}>
                                <h2>Login</h2>

                                    <span>Gebruikersnaam: </span>
                                    <input
                                        className="login-input"
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="gebruikersnaam.."
                                    />
                                    <span>Wachtwoord: </span>
                                    <input
                                        className="login-input"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="wachtwoord.."
                                    />
                                    <br/>
                                <button type="button" className={styles.buttoncontainer} onClick={clickHandler}> Login
                                </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
