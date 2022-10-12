import React from "react";

import './Home.css'
import midlogo from "../assets/4.jpg";
import {FaFish} from "react-icons/fa";

export default function Home() {
    return (

        <main>
            <div className="inlog-form">
                <form>
                    <div className="newForm">
                        <h5>LOG IN</h5>
                        <div className="fishLogo"><FaFish/></div>

                        <label>Email</label>
                        <input className='emailInput' type="text" name="uname" placeholder="Vul hier je email in..."
                               required/>
                        <label>Wachtwoord</label>
                        <input className='emailInput' type="password" name="wachtwoord"
                               placeholder="Vul hier je wachtwoord in..." required/>
                        <div className="button-container">
                            <button className="button-container2">Verzenden</button>
                        </div>
                        <div className="button-container">
                            <button className="button-container2">Wachtwoord vergeten?</button>
                        </div>
                        <div className="button-container">
                            <button className="button-container2">Registreren</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="mid-content">
                <img className="midPicture" src={midlogo} alt="foto"/>

                <div className="midText">
                    <h4>⬇️Meest recente upload⬇️</h4>
                    <li>Door: HENK1989</li>
                    <li>Waar: AGNIETENKAPEL ROTTERDAM</li>
                    <li>Soort vis: ZEELT</li>

                    <button className="button-container">
                        Naar de portfolio van deze gebruiker =>
                    </button>
                </div>

            </div>


        </main>


    )
        ;
}