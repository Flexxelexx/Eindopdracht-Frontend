import React, {useContext, useEffect, useState} from "react";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import axios from "axios";
import styles from "../Register/Register.module.css";
import {FaFish} from "react-icons/fa";
import {NavLink} from "react-router-dom";

function CreateAdmin() {

    useEffect(() => {
        document.title = "Admin creation";
    }, []);


    const [username, setUsername] = useState('');
    const [userpassword, setUserpassword] = useState('');


    const {boxjes} = useContext(ThemeContext);
    const [addSuccess, toggleAddSuccess] = useState(false);

    async function addAdmin(e) {
        e.preventDefault()
        const adminData = JSON.stringify({
            username: `${username}`,
            password: `${userpassword}`
        })
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await axios.post("http://localhost:8080/users/createadmin", adminData, customConfig);
            console.log('created admin');
            console.log(response.data)
            toggleAddSuccess(true)
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <>
            <div className="outer-container">
                <div className="inner-container">
                    <form
                        style={{boxShadow: boxjes}}
                        className={styles.loginform}
                        onSubmit={addAdmin}>

                        <h3>Admin aanmaken</h3>

                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>
                        <label>Profielnaam:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je profielnaam in..."
                            id="screen-name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>

                        <label>Wachtwoord:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je wachtwoord in..."
                            id="user-password"
                            value={userpassword}
                            onChange={(e) => setUserpassword(e.target.value)}/>

                        <br/>
                        <button
                            type="submit"
                            className={styles.button}
                        >
                            Maak admin aan
                        </button>
                        <br/>
                        {addSuccess === true && <p>Je admin account is toegevoegd!</p>}
                        {addSuccess === true && <p>Gebruik deze krachten met mate..</p>}
                        {addSuccess === true &&
                            <p>
                                <NavLink
                            to="/admin"
                            className={styles.navbuttons}
                        >
                            Ga snel naar inloggen!
                        </NavLink>
                            </p>
                        }

                    </form>


                </div>

            </div>
        </>
    );
}

export default CreateAdmin;