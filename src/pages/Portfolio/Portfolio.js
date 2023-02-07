import React, {useEffect} from "react";
import './Portfolio.css'
import {FaFish} from "react-icons/fa";
import StarRating from '../../components/StarRating/StarRating'
import SearchBar from "../../components/SearchBar/SearchBar";


export default function Portfolio() {

    useEffect(() => {
        document.title = "Portfolio";
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
                        <h3>Jouw laatste vangst:</h3>
                        <span> !FOTO </span>
                        <span>--------------------------------------------------</span>
                        <span>| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |</span>
                        <span>| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |</span>
                        <span>| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |</span>
                        <span>| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |</span>
                        <span>| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |</span>
                        <span>| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |</span>
                        <span>| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |</span>
                        <span>| xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx |</span>
                        <span>--------------------------------------------------</span>

                        <li>Waar: !locatie</li>
                        <li>Soort vis: !vissoort</li>
                        <li>Gewicht: !gewicht</li>
                        <li>Lengte: !lengte</li>
                        <li>Bijzonderheden: !bijzonderheden</li>
                    </div>

                </div>


                <div className="ratingScreen">
                    <h3>Geef deze vangst een beoordeling!</h3>
                    <StarRating/>
                </div>

            </div>

        </>
    )
        ;
}