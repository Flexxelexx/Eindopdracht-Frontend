import React from "react";

import './Home.css'
import midlogo from "../assets/4.jpg";
import {FaFish} from "react-icons/fa";
import useLocalStorage from "use-local-storage";

export default function Home() {


    const defaultKlein = window.matchMedia('(prefers-grootte: klein)').matches;
    const [grootte, setGrootte] = useLocalStorage('grootte', defaultKlein ? 'klein' : 'groot');

    const switchGrootte = () => {
        const newGrootte = grootte === 'klein' ? 'groot' : 'klein';
        setGrootte(newGrootte)
    }

    return (

        <div className='home-grid'>
            <div className="inlog-form">
                <form>
                    <div className="newForm">
                        <h5>LOG IN</h5>
                        <div className="fishLogo"><FaFish/></div>
                        <label>Email</label>
                        <input className='emailInput' type="text" name="uname" placeholder="Vul hier je email in..."
                        />
                        <label>Wachtwoord</label>
                        <input className='emailInput' type="password" name="wachtwoord"
                               placeholder="Vul hier je wachtwoord in..."/>
                        <div className="button-container">
                            <button className="loginbtns">Verzenden</button>
                        </div>
                        <div className="button-container">
                            <button className="loginbtns">Wachtwoord vergeten?</button>
                        </div>
                        <div className="button-container">
                            <button className="loginbtns">Nog geen lid? Registreer jezelf!</button>
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
                    <button className="toprofilebtn">
                        Deze vangst bekijken =>
                    </button>
                </div>
                <button className='thanksthumb' onClick={switchGrootte} data-theme={grootte}>
                    {grootte === 'klein' && <p>👍</p>}
                    {grootte === 'groot' && <p>Bedankt 😀</p>}
                </button>
            </div>
        </div>


    )
        ;
}