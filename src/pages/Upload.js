import React from "react";
import './Upload.css'
import {FaFish} from "react-icons/fa";
import midlogo from "../assets/4.jpg";


export default function Upload() {
    return (
        <>
            <main>
                <div className="inlog-form">
                    <form>
                        <div className="newForm">
                            <h5>Welkom terug !name! </h5>
                            <div className="fishLogo"><FaFish/></div>
                            <li>!totaal gevangen! : xxx</li>
                            <li>!totaal gewicht! : xxx</li>
                            <li>!totale lengte! : xxx</li>
                            <button className="logoutBtn">Uitloggen</button>
                        </div>

                    </form>
                </div>

                <div className="mid-content">
                    <div className="midText">
                        <h3>Upload</h3>
                        <span>x</span>
                        <form className="uploadForm">
                            <div className="uploadFormLine">
                                <label>
                                    Soort Vis:
                                </label>
                                <input type="text" name="uname" placeholder="Vul hier de soort vis in..."
                                       required/>
                            </div>
                            <div className="uploadFormLine">
                                <label>
                                    Gewicht:
                                </label>
                                <input type="text" name="uname" placeholder="Juriaan is gek ..."
                                       required/>
                            </div>
                            <div className="uploadFormLine">
                                <label>
                                    Lengte:
                                </label>
                                <input type="text" name="uname" placeholder="Vul hier de lengte in..."
                                       required/>
                            </div>
                            <div className="uploadFormLine">
                                <label>
                                    Locatie:
                                </label>
                                <input type="text" name="uname" placeholder="Vul hier de locatie in..."
                                       required/>
                            </div>
                            <div className="uploadFormLine">
                                <label>
                                    Tijd:
                                </label>
                                <input type="text" name="uname" placeholder="Vul hier de tijd in..."
                                       />
                            </div>
                            <div className="uploadFormLine">
                                <label>
                                    Kenmerken:
                                </label>
                                <input type="text" name="uname" placeholder="Vul hier kenmerken in..."
                                />
                            </div>
                            <div className="bottomBtns">
                            <button className="chooseFilebtn">
                                Kies bestand
                            </button>
                            <button className="sendUploadbtn">
                                Verzenden
                            </button>
                            </div>
                        </form>

                    </div>

                </div>


            </main>

        </>
    );
}