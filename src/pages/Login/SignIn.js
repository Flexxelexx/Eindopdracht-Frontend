import React, {useContext, useEffect, useState} from "react";
import "./Login.module.css";
import {FaFish} from "react-icons/fa";


import styles from "./Login.module.css";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import axios from "axios";
import {Link} from "react-router-dom";
import LoginComp from "../../components/Login/LoginComp";

function Login() {

    const [username, setUsername] = useState();
    const [userPassword, setUserpassword] = useState();

    const [addSucces, toggleAddSuccess] = useState(false);


    async function loginUser(e) {
        e.preventDefault();
        // console.log(username, userPassword);

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username: username,
                password: userPassword
            });

            // console.log(response.data);
            toggleAddSuccess(true);
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        document.title = "Login";
    }, []);

    const {boxjes} = useContext(ThemeContext);

    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.formposition}>
                <LoginComp/>
                {/*<div>*/}
                {/*    <form style={{boxShadow: boxjes}}*/}
                {/*          className={styles.midcontent}*/}
                {/*          onSubmit={loginUser}*/}
                {/*    >*/}
                {/*        <h3>Login</h3>*/}
                {/*        <div className={styles.fishLogo}>*/}
                {/*            <FaFish/>*/}
                {/*        </div>*/}

                {/*        {addSucces === true && <p>Inloggen gelukt!</p>}*/}

                {/*        <label>Username:</label>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            id="user-email"*/}
                {/*            placeholder="Vul hier je username in..."*/}
                {/*            value={username}*/}
                {/*            onChange={(e) => setUsername(e.target.value)}*/}
                {/*        />*/}

                {/*        <label>Wachtwoord:</label>*/}
                {/*        <input*/}
                {/*            type="password"*/}
                {/*            id="user-password"*/}
                {/*            placeholder="Vul hier je wachtwoord in..."*/}
                {/*            value={userPassword}*/}
                {/*            onChange={(e) => setUserpassword(e.target.value)}*/}
                {/*        />*/}

                {/*        <button type="submit" className={styles.buttoncontainer}>*/}
                {/*            Verzenden*/}
                {/*        </button>*/}
                {/*        <br/>*/}
                {/*        <Link to="/forgotpassword" classname={styles.buttoncontainer}>*/}
                {/*            Wachtwoord vergeten?*/}
                {/*        </Link>*/}
                {/*        <Link to="/register">*/}
                {/*            Nog geen lid? Registreer jezelf!*/}
                {/*        </Link>*/}
                {/*    </form>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default Login;
