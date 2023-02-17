import React, {useEffect, useState} from "react";
import "./Upload.module.css";
import {FaFish} from "react-icons/fa";
import SearchBar from "../../components/SearchBar/SearchBar";

import styles from "../Upload/Upload.module.css";
import axios from "axios";

export default function Upload() {
    useEffect(() => {
        document.title = "Upload";
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
                <div>
                    <form
                        className={styles.loginForm}>
                        <h5>LOG IN</h5>
                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>

                        <label>Email</label>
                        <input
                            type="text"
                            name="uname"
                            placeholder="Vul hier je email in..."
                        />
                        <label>Wachtwoord</label>
                        <input
                            type="password"
                            name="wachtwoord"
                            placeholder="Vul hier je wachtwoord in..."
                        />

                        <button className={styles.buttoncontainer}>Verzenden</button>
                        <button className={styles.buttoncontainer}>
                            Wachtwoord vergeten?
                        </button>
                        <button className={styles.buttoncontainer}>
                            Nog geen lid? Registreer jezelf!
                        </button>
                    </form>

                    <div className={styles.searchbar}>
                        <SearchBar/>
                    </div>
                </div>

                <div>
                    <form
                        className={styles.midcontent}
                        onSubmit={addUpload}>

                    <h3>Upload</h3>
                    <br/>
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
                        placeholder="Vul hier het gewicht in..."
                        id="weight-fish"
                        value={weightfish}
                        onChange={(e) => setWeightfish(e.target.value)}
                        required
                    />

                    <label>Lengte:</label>
                    <input
                        type="text"
                        placeholder="Vul hier de lengte in..."
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

                    {/*<button className={styles.buttoncontainer}>Kies bestand</button>*/}
                    <button
                        type="submit"
                        className={styles.buttoncontainer}
                    >
                        Verzenden
                    </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
