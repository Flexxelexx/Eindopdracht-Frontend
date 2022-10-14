import React from "react";
import './Visplekken.css'
import {FaFish} from "react-icons/fa";
import midlogo from "../assets/4.jpg";
import origineellogoPNG from "../assets/origineelLogoPNG.png"



function Visplekken() {
    return (

        <div className='visplekken-grid'>
            <div className="inlog-form">
                <form>
                    <div className="newForm">
                        <h5>Welkom terug !name </h5>
                        <div className="fishLogo"><FaFish/></div>
                        <li>!totaal gevangen! : xxx</li>
                        <li>!totaal gewicht! : xxx</li>
                        <li>!totale lengte! : xxx</li>
                        <button className="logoutBtn">Naar je portfolio</button>
                        <button className="logoutBtn">Uitloggen</button>
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


        </div>

    );
}

export default Visplekken;