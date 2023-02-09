import React, {useEffect} from "react";

import styles from '../Contact/Contact.module.css'


function Contact() {

    useEffect(() => {
        document.title = "Contacteer Ons";
    }, []);

    return (
        <div className='outer-container'>
            <div className='inner-container' id={styles.formposition}>
                <div>
                    <form className={styles.midcontent}>
                    <h2>Waar kunnen wij je mee helpen?</h2>
                    <h3>Vul hieronder een formulier in en dan zullen wij binnen 24 uur reageren.</h3>

                        <h4>Naam:</h4>
                        <input
                            type="text"
                            title="naam"
                            size="30"
                            placeholder='Vul hier je naam in..'
                            required
                        />
                        <h4>Email:</h4>
                        <input
                            type="text"
                            title="email"
                            size="30"
                            placeholder='Vul hier je email in..'
                            required
                        />
                        <h4>Vraag:</h4>
                        <textarea
                            type="text"
                            title="naam"
                            rows="10"
                            cols="30"
                            placeholder='Stel hier je vraag..'
                            required
                        />
                        <button className={styles.buttoncontainer}>Verzend formulier</button>
                    </form>
            </div>
        </div>
        </div>
    )
}

export default Contact;