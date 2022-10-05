import React from 'react';
import './SideMenuNotLoggedIn.css';

function SideMenuNotLoggedIn({email, wachtwoord, wwVergeten, registreren}) {
    return (
        <>
            <div className="form">
                <form>
                    <div className="sideMenuTop">
                    <p>INLOGGEN</p>
                    </div>
                    <div className="input-container">
                        <label>Email</label>
                        <input type="text" name="uname" required/>
                    </div>
                    <div className="input-container">
                        <label>Wachtwoord</label>
                        <input type="password" name="wachtwoord" required/>
                    </div>
                    <div className="button-container">
                        <button className="button-container">
                            Verzenden
                        </button>
                    </div>
                </form>
                <div className="sideMenuBottom">
                    <button className="button-container">Wachtwoord vergeten?</button>
                    <button className="button-container">Registreren</button>
                </div>
            </div>
        </>
    );
}
export default SideMenuNotLoggedIn;