import React, {useContext, useEffect, useState} from "react";

import styles from '../Register/Register.module.css'
import {FaFish} from "react-icons/fa";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import axios from "axios";

function Register() {

    const [userfirstname, setUserfirstname] = useState('');
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [userdob, setUserdob] = useState('');

    const {boxjes} = useContext(ThemeContext);
    const [addSuccess, toggleAddSuccess] = useState(false);

    async function addUser(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/users', {
                firstname: userfirstname,
                username: username,
                email: useremail,
                password: userpassword,
                dob: userdob,
            });

            // console.log(response.data);
            toggleAddSuccess(true);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        document.title = "Register";
    }, []);


    return (
        <>
            <div className="outer-container">
                <div className="inner-container" id={styles.content}>
                    <form
                        style={{boxShadow: boxjes}}
                        className={styles.loginform}
                        onSubmit={addUser}>

                        <h3>Registreren</h3>

                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>

                        {addSuccess === true && <p>Gebruiker is toegevoegd!</p>}

                        <label>Naam:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je naam in..."
                            id="user-name"
                            value={userfirstname}
                            onChange={(e) => setUserfirstname(e.target.value)}/>

                        <label>Profielnaam:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je profielnaam in..."
                            id="screen-name"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>

                        <label>Email:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je email in..."
                            id="user-email"
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)}/>

                        <label>Wachtwoord:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je wachtwoord in..."
                            id="user-password"
                            value={userpassword}
                            onChange={(e) => setUserpassword(e.target.value)}/>

                        <label>Geboortedatum:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je geboortedatum in..."
                            id="user-dob"
                            value={userdob}
                            onChange={(e) => setUserdob(e.target.value)}
                        />

                        <button
                            type="submit"
                            className={styles.buttoncontainer}
                        >
                            Maak gebruiker aan
                        </button>
                    </form>


                </div>

            </div>
        </>
    );
}

export default Register;
