import React, {useEffect} from "react";

import './Account.module.css';
import {FaFish} from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

function Account() {

    useEffect(() => {
        document.title = "Account";
    }, []);

    return (
        <>
            <div className='portfolio-grid'>
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

                <div className="search-field">
                    <div className="searchbar">
                        <SearchBar/>
                    </div>
                </div>

                <div className="mid-content">

                    <div className="mid-content-text">
                        <div className="midText">
                            <h3>Account</h3>
                            <span>x</span>
                            <form className="uploadForm">
                                <div className="uploadFormLine">
                                    <label>
                                        Naam:
                                    </label>
                                    <input type="text" name="uname" placeholder="Vul hier je naam in..."
                                    />
                                </div>
                                <div className="uploadFormLine">
                                    <label>
                                        Profielnaam
                                    </label>
                                    <input type="text" name="uname" placeholder="Vul hier je profielnaam in..."
                                    />
                                </div>
                                <div className="uploadFormLine">
                                    <label>
                                        Email
                                    </label>
                                    <input type="text" name="uname" placeholder="Vul hier je email in..."
                                    />
                                </div>
                                <div className="uploadFormLine">
                                    <label>
                                        Locatie:
                                    </label>
                                    <input type="text" name="uname" placeholder="Vul hier de locatie in..."
                                    />
                                </div>
                                <div className="bottomBtns">
                                    <button className='pictureFrame'>
                                        Profielfoto
                                    </button>
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
                </div>

            </div>

        </>
    )
        ;
}

export default Account;