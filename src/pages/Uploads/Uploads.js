import React, {useContext, useEffect, useState} from "react";
import styles from './Uploads.module.css'
import {FaFish} from "react-icons/fa";

import axios from "axios";
import {AuthContext} from "../../components/AuthContext/AuthContext";

export default function Uploads() {

    useEffect(() => {
        document.title = "Uploads";
    }, []);

    const [speciesfish, setSpeciesfish] = useState('');
    const [weightfish, setWeightfish] = useState('');
    const [lengthfish, setLengthfish] = useState('');
    const [charsfish, setCharsfish] = useState('');
    const [city, setCity] = useState('');
    const [location, setLocation] = useState('');
    const [rodLength, setRodLength] = useState('');
    const [kindofreel, setKindOfReel] = useState('');
    const [lure, setLure] = useState('');
    const [linelength, setLine] = useState('');

    const [file, setFile] = useState([]);
    const [data, setData] = useState({});

    const {user} = useContext(AuthContext);


    const [addSuccess, toggleAddSuccess] = useState(false);

    let formData = new FormData();

    function handleChange(e) {
        const upload = e.target.files[0];
        setFile(upload);
    }

    async function addPhoto(e) {
        formData.append("file", file)
        e.preventDefault();
        try {
            const imageResponse = await axios.post('http://localhost:8080/single/uploadDb', formData, {
                headers: {
                    "Content-Type ": 'multipart/form-data'
                },
            });
            setData(imageResponse.data);
            console.log(imageResponse.data)
        } catch (e) {
            console.error(e);
            throw e;
        }
    }


    async function addUpload(e) {
        e.preventDefault()
        try {

            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const response = await axios.post('http://localhost:8080/uploads', {
                weightFish: weightfish,
                lengthFish: lengthfish,
                charsFish: charsfish,
                speciesFish: speciesfish,
                locationCaught: location,
                cityCaught: city,
                rodLength: rodLength,
                kindOfReel: kindofreel,
                kindOfLure: lure,
                lineLength: linelength,
                file: data
            }, config);


            console.log(response.data);
            toggleAddSuccess(true);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.content}>
                <form
                    className={styles.midcontent}
                    onSubmit={addPhoto}>
                    <label htmlFor="upload-image">
                        Kies afbeelding:
                        <br/>
                        <input type="file"
                               name="image-field"
                               id="upload-image"
                               onChange={handleChange}/>
                    </label>
                    <p>Druk eerst op 'foto uploaden' voor je verder gaat met het formulier!</p>
                    <br/>

                    <button
                        type="submit"
                        className={styles.buttoncontainer}
                    >
                        Foto uploaden
                    </button>
                </form>
                <form
                    className={styles.midcontent}
                    onSubmit={addUpload}>
                    <div className={styles.contentLeft}>
                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>
                        <br/>
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

                    <div className={styles.contentMidLeft}>
                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>
                        <label>Lengte hengel:</label>
                        <input
                            type="text"
                            placeholder="Vul hier de lengte in..."
                            id="rod-length"
                            value={rodLength}
                            onChange={(e) => setRodLength(e.target.value)}/>

                        <label>Molen of Reel:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je molen/reel in..."
                            id="reel-molen"
                            value={kindofreel}
                            onChange={(e) => setKindOfReel(e.target.value)}/>

                        <label>Aassoort:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je aassoort in..."
                            id="kind-lure"
                            value={lure}
                            onChange={(e) => setLure(e.target.value)}/>

                        <label>Lijn:</label>
                        <input
                            type="text"
                            placeholder="Vul hier je lijn in..."
                            id="kind-of-line"
                            value={linelength}
                            onChange={(e) => setLine(e.target.value)}/>
                    </div>

                    <div className={styles.midcontentRight}>
                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>
                        <label>Plaatsnaam:</label>
                        <input
                            type="text"
                            placeholder="Vul hier de plaatsnaam in.."
                            id="city-fish"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <label>Google maps dropped pin link:</label>
                        <input
                            type="text"
                            placeholder="Plak hier je link.."
                            id="location-fish"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        <button
                            type="submit"
                            className={styles.buttoncontainer}
                        >
                            Upload verzenden
                        </button>
                        {addSuccess === true && <p>Upload is toegevoegd!</p>}
                        {addSuccess === true && <p>Klik nu hier om je upload aan je account te linken!</p>}
                        {/*{addSuccess === true && <button type="submit" onSubmit={connectUpload}>Klik</button>}*/}

                    </div>
                </form>
            </div>
        </div>
    )
        ;
}
