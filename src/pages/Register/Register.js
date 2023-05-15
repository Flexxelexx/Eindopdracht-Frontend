import React, {useContext, useEffect, useState} from "react";

import styles from "../Register/Register.module.css";
import {FaFish} from "react-icons/fa";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import axios from "axios";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Register() {
    useEffect(() => {
        document.title = "Register";
    }, []);

    const [userfirstname, setUserfirstname] = useState("");
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [userpassword, setUserpassword] = useState("");
    const [userdob, setUserdob] = useState("");

    const {boxjes} = useContext(ThemeContext);
    const [addSuccess, toggleAddSuccess] = useState(false);

    async function addUser(e) {
        e.preventDefault();
        const userData = JSON.stringify({
            firstname: `${userfirstname}`,
            username: `${username}`,
            email: `${useremail}`,
            password: `${userpassword}`,
            dob: `${userdob}`,
        });
        const customConfig = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/users",
                userData,
                customConfig
            );
            console.log("created account", response.data);
            toggleAddSuccess(true);
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
                        onSubmit={addUser}
                    >
                        <h3>Registreren</h3>

                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>

                        <Input
                            label="Naam"
                            type="text"
                            placeholder="Vul hier je naam in..."
                            value={userfirstname}
                            onChange={(e) => setUserfirstname(e.target.value)}/>

                        <Input
                            label="Profielnaam"
                            type="text"
                            placeholder="Vul hier je profielnaam in..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>

                        <Input
                            label="Email"
                            type="text"
                            placeholder="Vul hier je email in..."
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)}/>

                        <Input
                            label="Wachtwoord"
                            type="text"
                            placeholder="Vul hier je wachtwoord in..."
                            value={userpassword}
                            onChange={(e) => setUserpassword(e.target.value)}/>

                        <Input
                            label="Geboortedatum"
                            type="text"
                            placeholder="Vul hier je geboortedatum in..."
                            value={userdob}
                            onChange={(e) => setUserdob(e.target.value)}
                        />

                        <br/>
                        <Button
                            value="Maak gebruiker aan"/>
                        <br/>
                        {addSuccess === true && <p>Je account is toegevoegd!</p>}
                        {addSuccess === true && <p>Log nu snel in en ga aan de slag!</p>}
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;
