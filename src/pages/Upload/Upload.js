import React, {useEffect, useState} from "react";
import './Upload.module.css'
import {FaFish} from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from '../Upload/Upload.module.css'
import Map from "../../components/Map/Map";


export default function Upload() {

    useEffect(() => {
        document.title = "Upload";
    }, []);

    const [position, setPosition] = useState([51.505, -0.09])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setPosition([position.coords.latitude, position.coords.longitude])
            },
            (error) => {
                console.error(error)
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
    }, [])

    return (

        <div className='outer-container'>
            <div className="inner-container" id={styles.content}>
                <div>
                    <form className={styles.loginForm}>
                        <h5>Welkom terug !name </h5>
                        <div className={styles.fishLogo}><FaFish/></div>
                        <li>!totaal gevangen : xxx</li>
                        <li>!totaal gewicht : xxx</li>
                        <li>!totale lengte : xxx</li>
                        <button className={styles.buttoncontainer}>Uitloggen</button>
                    </form>

                    <div className={styles.searchbar}>
                        <SearchBar/>
                    </div>
                </div>

                <div className={styles.midcontent}>
                    <h3>Upload</h3>
                    <span>x</span>
                    <label>
                        Soort Vis:
                    </label>
                    <input type="text" placeholder="Vul hier de soort vis in..."
                           required/>
                    <label>
                        Gewicht:
                    </label>
                    <input type="text" placeholder="Vul hier het gewicht in..."
                           required/>
                    <label>
                        Lengte:
                    </label>
                    <input type="text" placeholder="Vul hier de lengte in..."
                           required/>
                    <label>
                        Tijd:
                    </label>
                    <input type="text" placeholder="Vul hier de tijd in..."
                    />
                    <label>
                        Kenmerken:
                    </label>
                    <input type="text" placeholder="Vul hier kenmerken in..."
                    />
                    <button className={styles.buttoncontainer}>
                        Kies bestand
                    </button>
                    <button className={styles.buttoncontainer}>
                        Verzenden
                    </button>
                </div>

                <div className={styles.map}>
                    <Map/>
                </div>
            </div>
        </div>
    )
        ;
}