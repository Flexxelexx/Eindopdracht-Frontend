import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import styles from "../DetailsPage/DetailPage.module.css"
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";

function DetailsPage() {
    const location = useLocation();
    const { upload } = location.state;

    const {boxjes} = useContext(ThemeContext);

    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.content}>
        <div style={{WebkitBoxShadow: boxjes}} className={styles.welkom}>
            <h2>Vangst nummer: {upload.id}</h2>
            <br/>
            <p>Gevangen door: {upload.username}</p>
            <p>Soort vis: {upload.speciesFish}</p>
            <p>Gewicht in kg: {upload.weightFish}</p>
            <p>Lengte in cm: {upload.lengthFish}</p>
            <p>Bijzonderheden: {upload.charsFish}</p>
            <p>Locatie: {upload.locationCaught}</p>
            <p>Foto: xxx</p>
        </div>
            </div>
        </div>
    );
}
export default DetailsPage;