import React, {useState, useContext} from "react";
import styles from './Login.module.css'

import axios from "axios";
import {AuthContext} from "../../context/AuthContext"
import {ThemeContext} from "styled-components";


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {loginFunction, logoutFunction} = useContext(AuthContext);
    const [loggedIn, setLoggedIn] = useState(false);

    const {boxjes} = useContext(ThemeContext)


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
            setLoggedIn(true)
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
                    <div className={styles.searchbar}>
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
                        {loggedIn ? (
                            <button type="button" className={styles.buttoncontainer} onClick={clickLogout}> logout
                            </button>
                        ) : (
                            <button type="button" className={styles.buttoncontainer} onClick={clickHandler}> login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
