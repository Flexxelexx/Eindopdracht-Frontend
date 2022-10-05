import React from 'react';
import './Midinfo.css';
import midlogo from '../assets/4.jpg';

function Midinfo(props) {
    return (
        <>
            <div className="midScreen">
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
        </>
    );
}

export default Midinfo;