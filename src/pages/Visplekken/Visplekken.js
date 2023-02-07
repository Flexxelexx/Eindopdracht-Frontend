import React, {useEffect} from "react";
import './Visplekken.css'
import {FaFish} from "react-icons/fa";
import midlogo from "../../assets/4.jpg";
import SearchBar from "../../components/SearchBar/SearchBar";



function Visplekken() {

    useEffect(() => {
        document.title = "Visplekken";
    }, []);

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

            <div className="search-field">
                <div className="searchbar">
                    <SearchBar/>
                </div>
            </div>

            <div className="mid-content">

                <div className="midText">
                    <h4>LEGE CONTENT ️</h4>

                    <button className="button-container">
                        Naar de portfolio van deze gebruiker =>
                    </button>
                </div>

            </div>


        </div>

    );
}

export default Visplekken;