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
    const [city, setCity] = useState();
    const [location, setLocation] = useState();
    const [addSuccess, toggleAddSuccess] = useState(false);
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');

    function handleImageChange(e) {
        const uploadedFile = e.target.files[0];
        // console.log(uploadedFile);
        setFile(uploadedFile);
        setPreviewUrl(URL.createObjectURL(uploadedFile));
    }

    async function addUpload(e) {
        e.preventDefault();
        // console.log(speciesfish, weightfish, lengthfish, charsfish, city, location, photo)

        try {
            const response = await axios.post('http://localhost:8080/uploads', {
                speciesFish: speciesfish,
                weightFish: weightfish,
                lengthFish: lengthfish,
                locationCaught: location,
                charsFish: charsfish,
                cityCaught: city,
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

                    <div className={styles.midcontentLeft}>
                        <h3>Upload</h3>
                        {addSuccess === true && <p>Upload is toegevoegd!</p>}
                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>
                        <label>Vissoort:</label>
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

                        <label>Kenmerken:</label>
                        <input
                            type="text"
                            placeholder="Vul hier kenmerken in..."
                            id="chars-fish"
                            value={charsfish}
                            onChange={(e) => setCharsfish(e.target.value)}/>
                    </div>

                    <div className={styles.midcontentRight}>
                        <label>Plaatsnaam:</label>
                        <input
                            type="text"
                            placeholder="Vul hier de plaats naam in.."
                            id="city-fish"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <label>Google maps dropped pin link:</label>
                        <input
                            type="text"
                            placeholder="Plak hier je link in.."
                            id="location-fish"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <label htmlFor="upload-image">
                            Kies afbeelding:
                            <br/>
                            <input type="file" name="image-field" id="upload-image"
                                   onChange={handleImageChange}/>
                        </label>
                        <label>
                            Preview:
                            <img src={previewUrl} alt="Voorbeeld van de afbeelding die zojuist gekozen is" className="image-preview"/>
                        </label>
                        <br/>
                        <button
                            type="submit"
                            className={styles.buttoncontainer}
                        >
                            Upload verzenden
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
