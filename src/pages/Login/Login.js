import React, {useState, useContext} from "react";
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

    const {isAuthenticated} = useContext(AuthContext)


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
            alert('invalid username or password, please try again')
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
                                <p>Je bent nu ingelogd :-)</p>
                                <NavLink
                                    to="/account"
                                    style={{color: kleuren}}
                                    className={styles.navbuttons}
                                    >
                                    Klik hier om naar je account te gaan!
                                </NavLink>
                                <button type="button" className={styles.buttoncontainer} onClick={clickLogout}> logout
                                </button>
                            </>
                        ) : (
                            <>
                                <label>
                                    <input
                                        className="login-input"
                                        type="text"
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="username"
                                    />
                                </label>
                                <label>
                                    <input
                                        className="login-input"
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="password"
                                    />

                                </label>
                                <button type="button" className={styles.buttoncontainer} onClick={clickHandler}> login
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
