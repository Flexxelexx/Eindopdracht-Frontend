import React, {useEffect} from "react";

import './Contact.css'


function Contact() {

    useEffect(() => {
        document.title = "Contacteer Ons";
    }, []);

    return (
        <div className='contact-grid'>
            <div className='contact-form'>
                <section className='contact-section'>
                    <h2>Waar kunnen wij je mee helpen?</h2>
                    <h3>Vul hieronder een formulier in en dan zullen wij binnen 24 uur reageren</h3>
                    <form className='contact-section'>
                        <h4>Naam:</h4>
                        <input
                            type="text"
                            title="naam"
                            placeholder='Vul hier je naam in..'
                            required
                        />
                        <h4>Email:</h4>
                        <input
                            type="text"
                            title="email"
                            placeholder='Vul hier je email in..'
                            required
                        />
                        <h4>Vraag:</h4>
                        <textarea
                            type="text"
                            title="naam"
                            rows="5"
                            cols="30"
                            placeholder='Stel hier je vraag..'
                            required
                        />
                        <button className='sendbtn'>Verzend formulier</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Contact;