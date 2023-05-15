import React, {useContext, useEffect} from "react";

import styles from "../Contact/Contact.module.css";
import {FaFish} from "react-icons/fa";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Contact() {
    useEffect(() => {
        document.title = "Contacteer Ons";
    }, []);

    const {boxjes} = useContext(ThemeContext);

    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.formposition}>
                <div>
                    <form style={{boxShadow: boxjes}} className={styles.midcontent}>
                        <h3>Contact</h3>

                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>

                        <h2>Waar kunnen wij je mee helpen?</h2>

                        <h4>
                            Vul hieronder een formulier in en dan zullen wij binnen 24 uur
                            reageren.
                        </h4>


                        <Input
                            label="Naam"
                            placeholder="Vul hier je naam in.."
                            required
                        />

                        <Input
                            label="Email"
                            placeholder="Vul hier je email in.."
                            required
                        />

                        <label>Vraag:</label>
                        <textarea
                            type="text"
                            title="naam"
                            rows="10"
                            cols="30"
                            placeholder="Stel hier je vraag.."
                            required
                        />

                        <Button
                            type="button"
                            className={styles.buttoncontainer}
                            value="verzend formulier"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
