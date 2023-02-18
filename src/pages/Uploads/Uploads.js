import React, {useEffect, useState} from "react";
import styles from './Uploads.module.css'
import {FaFish} from "react-icons/fa";

import axios from "axios";

export default function Uploads() {
    useEffect(() => {
        document.title = "Uploads";
    }, []);

    const [speciesfish, setSpeciesfish] = useState();
    const [weightfish, setWeightfish] = useState();
    const [lengthfish, setLengthfish] = useState();
    const [charsfish, setCharsfish] = useState();
    const [location, setLocation] = useState();

    const [addSuccess, toggleAddSuccess] = useState(false);

    async function addUpload(e) {
        e.preventDefault();
        console.log(speciesfish, weightfish, lengthfish, charsfish, location)

        try {
            const response = await axios.post('http://localhost:8080/uploads', {
                speciesFish: speciesfish,
                weightFish: weightfish,
                lengthFish: lengthfish,
                locationCaught: location,
                charsFish: charsfish
            });

            console.log(response.data);
            toggleAddSuccess(true)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.content}>
                <form
                    className={styles.midcontent}
                    onSubmit={addUpload}>

                    <h3>Upload</h3>
                    <div className={styles.fishLogo}>
                        <FaFish/>
                    </div>
                    {addSuccess === true && <p>Upload is toegevoegd!</p>}
                    <label>Soort Vis:</label>
                    <input
                        type="text"
                        placeholder="Vul hier de soort vis in..."
                        id="name-fish"
                        value={speciesfish}
                        onChange={(e) => setSpeciesfish(e.target.value)}
                        required
                    />

                    <label>Gewicht:</label>
                    <input
                        type="text"
                        placeholder="Werk met punten..."
                        id="weight-fish"
                        value={weightfish}
                        onChange={(e) => setWeightfish(e.target.value)}
                        required
                    />

                    <label>Lengte:</label>
                    <input
                        type="text"
                        placeholder="Werk met punten..."
                        id="length-fish"
                        value={lengthfish}
                        onChange={(e) => setLengthfish(e.target.value)}
                        required/>

                    <label>Locatie:</label>
                    <input
                        type="text"
                        placeholder="Vul hier de locatie in..."
                        id="location-fish"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />

                    <label>Kenmerken:</label>
                    <input
                        type="text"
                        placeholder="Vul hier kenmerken in..."
                        id="chars-fish"
                        value={charsfish}
                        onChange={(e) => setCharsfish(e.target.value)}/>

                    <button
                        type="submit"
                        className={styles.buttoncontainer}
                    >
                        Verzenden
                    </button>
                </form>

            </div>
        </div>
    );
}
