import React, {useContext, useEffect, useState} from "react";
import styles from "./Uploads.module.css";
import {FaFish} from "react-icons/fa";
import {BiCurrentLocation} from "react-icons/bi";
import {GiFishingPole} from "react-icons/gi";
import {FaPhotoVideo} from "react-icons/fa";
import {FiSave} from "react-icons/fi";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

export default function Uploads() {
    useEffect(() => {
        document.title = "Uploads";
    }, []);

    const [uploadID, setUploadID] = useState(0);
    const [speciesfish, setSpeciesfish] = useState("");
    const [weightfish, setWeightfish] = useState("");
    const [lengthfish, setLengthfish] = useState("");
    const [charsfish, setCharsfish] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");
    const [rodLength, setRodLength] = useState("");
    const [kindofreel, setKindOfReel] = useState("");
    const [lure, setLure] = useState("");
    const [linelength, setLine] = useState("");

    const [file, setFile] = useState("");
    const {user} = useContext(AuthContext);

    const [addSuccess, toggleAddSuccess] = useState(false);

    let formData = new FormData();

    function handleChange(e) {
        const upload = e.target.files[0];
        setFile(upload);
    }

    async function addUpload(e) {
        formData.append("file", file);
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            console.log(token);
            const config = {
                headers: {Authorization: `Bearer ${token}`},
            };

            const capitalizeFirstLetter = (str) => {
                return str.charAt(0).toUpperCase() + str.slice(1);
            };

            const capiSpeciesfish = capitalizeFirstLetter(speciesfish);
            const capiCity = capitalizeFirstLetter(city);
            const capiKindofReel = capitalizeFirstLetter(kindofreel);
            const capiLure = capitalizeFirstLetter(lure);

            axios
                .post("http://localhost:8080/single/uploadDb", formData, config)
                .then(function (photoResponse) {
                    axios
                        .post(
                            "http://localhost:8080/uploads",
                            {
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
                                file: photoResponse.data,
                            },
                            config
                        )
                        .then(function (uploadResponse) {
                            const token = localStorage.getItem("token");
                            try {
                                const connectResponse = axios.post(
                                    `http://localhost:8080/users/${user.accountID}/upload/${uploadResponse.data}`,
                                    {},
                                    {
                                        headers: {
                                            Authorization: `Bearer ${token}`,
                                        },
                                    }
                                );
                                console.log(connectResponse);
                            } catch (e) {
                                console.error(e);
                            }
                        });
                });
            toggleAddSuccess(true);
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    useEffect(() => {
        async function connectLoggedInToUpload() {
            if (!uploadID) {
                return;
            }

            const token = localStorage.getItem("token");
            try {
                const response = await axios.post(
                    `http://localhost:8080/users/${user.accountID}/upload/${uploadID}`,
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        connectLoggedInToUpload();

        return () => {
        };
    }, [uploadID]);

    return (
        <div className="outer-container">
            <div className="inner-container">
                <Card>
                    <form
                        className={styles.formcontent}
                    >
                        <div className={styles.fishLogo}>
                            <FaPhotoVideo/>
                        </div>

                        <label className={styles.formcontent}>
                            <h3>Stap 1: Foto uploaden</h3>
                            <b>_________________________________</b>
                            <br/>
                            <Input
                                label="Kies afbeelding"
                                type="file"
                                onChange={handleChange}/>
                        </label>
                    </form>
                    <br/>
                    <form onSubmit={addUpload} className={styles.formcontent}>
                        <div className={styles.fishLogo}>
                            <FaFish/>
                        </div>
                        <h3>Stap 2: Wat voor vis is het?</h3>
                        <b>_________________________________</b>
                        <br/>


                        <Input
                            label="Vissoort"
                            type="text"
                            placeholder="Vul hier de soort vis in..."
                            value={speciesfish}
                            onChange={(e) => setSpeciesfish(e.target.value)}/>

                        <Input
                            label="Gewicht"
                            type="text"
                            placeholder="Werk met punten.."
                            value={weightfish}
                            onChange={(e) => setWeightfish(e.target.value)}/>

                        <Input
                            label="Lengte"
                            type="text"
                            placeholder="Werk met punten..."
                            value={lengthfish}
                            onChange={(e) => setLengthfish(e.target.value)}/>

                        <Input
                            label="Kenmerken"
                            type="text"
                            placeholder="Vul hier de kenmerken in..."
                            value={charsfish}
                            onChange={(e) => setCharsfish(e.target.value)}/>
                    </form>
                    <br/>
                    <form onSubmit={addUpload} className={styles.formcontent}>
                        <div className={styles.fishLogo}>
                            <GiFishingPole/>
                        </div>
                        <h3>Stap 3: Welke gear heb je gebruikt?</h3>
                        <b>_________________________________</b>
                        <br/>

                        <Input
                            label="Lengte hengel"
                            type="text"
                            placeholder="Vul hier de lengte in..."
                            value={rodLength}
                            onChange={(e) => setRodLength(e.target.value)}/>

                        <Input
                            label="Molen of Reel"
                            type="text"
                            placeholder="Vul hier je molen/reel in..."
                            value={kindofreel}
                            onChange={(e) => setKindOfReel(e.target.value)}/>

                        <Input
                            label="Aassoort"
                            type="text"
                            placeholder="Vul hier je aassoort in..."
                            value={lure}
                            onChange={(e) => setLure(e.target.value)}/>

                        <Input
                            label="Lijn"
                            type="text"
                            placeholder="Vul hier je lijn in..."
                            value={linelength}
                            onChange={(e) => setLine(e.target.value)}/>
                    </form>
                    <br/>
                    <form onSubmit={addUpload} className={styles.formcontent}>
                        <div className={styles.fishLogo}>
                            <BiCurrentLocation/>
                        </div>
                        <h3>Stap 4: Waar heb je deze vis gevangen?</h3>
                        <b>_________________________________</b>
                        <br/>

                        <Input
                            label="Plaatsnaam"
                            type="text"
                            placeholder="Vul hier de plaatsnaam in..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}/>

                        <Input
                            label="Google maps dropped pin link"
                            type="text"
                            placeholder="Plak hier je link.."
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}/>

                        <br/>
                        <div className={styles.fishLogo}>
                            <FiSave/>
                        </div>
                        <h3>Stap 5: Sla jouw vangst op!</h3>
                        <b>_________________________________</b>
                        {addSuccess === true && <p>Upload is toegevoegd!</p>}
                        <br/>
                        <Button
                            className={styles.button}
                            clickHandler={addUpload}
                            value="Sla je vangst op!"/>
                    </form>
                </Card>
            </div>
        </div>
    );
}
