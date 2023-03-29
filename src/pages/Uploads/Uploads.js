import React, {useContext, useEffect, useState} from "react";
import styles from './Uploads.module.css'
import {FaFish} from "react-icons/fa";
import {BiCurrentLocation} from "react-icons/bi";
import {GiFishingPole} from "react-icons/gi"
import {FaPhotoVideo} from "react-icons/fa"
import {FiSave} from "react-icons/fi"
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";


export default function Uploads() {

    useEffect(() => {
        document.title = "Uploads";
    }, []);

    const [uploadID, setUploadID] = useState(0);
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

    const [file, setFile] = useState('');
    const {user} = useContext(AuthContext);


    const [addSuccess, toggleAddSuccess] = useState(false);

    let formData = new FormData();

    function handleChange(e) {
        const upload = e.target.files[0];
        setFile(upload);
    }

    async function addUpload(e) {
        formData.append("file", file)
        e.preventDefault()

        try {

            const token = localStorage.getItem('token')
            console.log(token)
            const config = {
                headers: {Authorization: `Bearer ${token}`}
            };

            const capitalizeFirstLetter = (str) => {
                return str.charAt(0).toUpperCase() + str.slice(1);
            };

            const capiSpeciesfish = capitalizeFirstLetter(speciesfish);
            const capiCity = capitalizeFirstLetter(city);
            const capiKindofReel = capitalizeFirstLetter(kindofreel);
            const capiLure = capitalizeFirstLetter(lure);


            axios.post('http://localhost:8080/single/uploadDb', formData, config).then(function (photoResponse) {
                axios.post('http://localhost:8080/uploads', {
                    weightFish: weightfish,
                    lengthFish: lengthfish,
                    charsFish: charsfish,
                    speciesFish: capiSpeciesfish,
                    locationCaught: location,
                    cityCaught: capiCity,
                    rodLength: rodLength,
                    kindOfReel: capiKindofReel,
                    kindOfLure: capiLure,
                    lineLength: linelength,
                    file: photoResponse.data
                }, config).then(function (uploadResponse) {
                    const token = localStorage.getItem('token')
                    try {
                        const connectResponse = axios.post(`http://localhost:8080/users/${user.accountID}/upload/${uploadResponse.data}`, {}, {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        console.log(connectResponse)
                    } catch (e) {
                        console.error(e)
                    }
                })
            });
                toggleAddSuccess(true);
            }
        catch
            (e)
            {
                console.error(e);
                throw e;
            }
        }


        useEffect(() => {
            async function connectLoggedInToUpload() {
                if (!uploadID) {
                    return;
                }

                const token = localStorage.getItem('token')
                try {
                    const response = await axios.post(`http://localhost:8080/users/${user.accountID}/upload/${uploadID}`, {}, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    console.log(response.data)
                } catch (e) {
                    console.error(e)
                }
            }

            connectLoggedInToUpload();

            return () => {
            };
        }, [uploadID]);


        return (
            <div className="outer-container">
                <div className="inner-container">
                    <div className={styles.allcontent}>

                        <form
                            // onSubmit={addPhoto}
                            className={styles.formcontent}>

                            <div className={styles.fishLogo}>
                                <FaPhotoVideo/>
                            </div>

                            <label className={styles.formcontent}>
                                <h3>Stap 1: Foto uploaden</h3>
                                <b>_________________________________</b>
                                <br/>
                                Kies afbeelding:
                                <br/>

                                <input type="file"
                                       name="image-field"
                                       id="upload-image"
                                       onChange={handleChange}
                                />
                                <br/>
                            </label>
                        </form>
                        <br/>
                        <form
                            onSubmit={addUpload}
                            className={styles.formcontent}>

                            <div className={styles.fishLogo}>
                                <FaFish/>
                            </div>
                            <h3>Stap 2: Wat voor vis is het?</h3>
                            <b>_________________________________</b>
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
                        </form>
                        <br/>
                        <form
                            onSubmit={addUpload}
                            className={styles.formcontent}>

                            <div className={styles.fishLogo}>
                                <GiFishingPole/>
                            </div>
                            <h3>Stap 3: Welke gear heb je gebruikt?</h3>
                            <b>_________________________________</b>
                            <br/>

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
                        </form>
                        <br/>
                        <form
                            onSubmit={addUpload}
                            className={styles.formcontent}>

                            <div className={styles.fishLogo}>
                                <BiCurrentLocation/>
                            </div>
                            <h3>Stap 4: Waar heb je deze vis gevangen?</h3>
                            <b>_________________________________</b>
                            <br/>

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
                            <br/>
                            <div className={styles.fishLogo}>
                                <FiSave/>
                            </div>
                            <h3>Stap 5: Sla jouw vangst op!</h3>
                            <b>_________________________________</b>
                            {addSuccess === true && <p>Upload is toegevoegd!</p>}
                            <br/>
                            <button
                                type="submit"
                                className={styles.button}
                            >
                                Vangst opslaan!
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        )
            ;
    }
