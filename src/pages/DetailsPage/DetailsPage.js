import React, {useContext} from "react";
import {Link, useLocation} from "react-router-dom";
import styles from "../DetailsPage/DetailPage.module.css"
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";

function DetailsPage() {
    const location = useLocation();
    const {upload} = location.state;


    const {boxjes} = useContext(ThemeContext);

    return (
        <div className="outer-container">
            <div className="inner-container">
                <div style={{WebkitBoxShadow: boxjes}} className={styles.welkom}>
                    <h2>Vangst nummer: {upload.id}</h2>
                    <br/>
                    <p>
                        Gevangen door:
                        <Link to={{
                            pathname: `/users/${upload.username}`,
                            state: {upload}
                        }}>{upload.username}</Link>
                    </p>
                    <p>Soort vis: {upload.speciesFish}</p>
                    <p>Gewicht in kg: {upload.weightFish}</p>
                    <p>Lengte in cm: {upload.lengthFish}</p>
                    <p>Bijzonderheden: {upload.charsFish}</p>
                    <p>Lengte hengel: {upload.rodLength}</p>
                    <p>Molen of Reel: {upload.kindOfReel}</p>
                    <p>Aassoort: {upload.kindOfLure}</p>
                    <p>Lijn: {upload.lineLength}</p>
                    <br/>
                    <p>
                        <a href={upload.locationCaught} target={"_blank"} rel="noreferrer">Locatie bekijken</a>
                    </p>
                    <p><img src={upload.file.url} alt="xx"/></p>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;