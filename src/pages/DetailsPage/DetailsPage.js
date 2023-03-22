import React, {useContext, useState} from "react";
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
                <div style={{WebkitBoxShadow: boxjes}} className={styles.content}>
                    <h2>Vangst nummer: {upload.id}</h2>
                    <br/>
                    <p className={styles.text}>
                        <span>Gevangen door: {upload.username}</span>
                        <span>Soort vis: {upload.speciesFish}</span>
                        <span>Gewicht in kg: {upload.weightFish}</span>
                        <span>Lengte in cm: {upload.lengthFish}</span>
                        <span>Lengte hengel: {upload.rodLength}</span>
                        <span>Molen of Reel: {upload.kindOfReel}</span>
                        <span>Aassoort: {upload.kindOfLure}</span>
                        <span>Lijn: {upload.lineLength}</span>
                        <span>Bijzonderheden: {upload.charsFish}</span>
                    </p>
                    <br/>
                    <p>
                        <Link
                            className={styles.button}
                            to={{
                                pathname: `/users/${upload.username}`,
                                state: {upload}
                            }}>Gebruiker bekijken

                        </Link>
                    </p>
                    <p>
                        <a
                            href={upload.locationCaught}
                            target={"_blank"} rel="noreferrer"
                            className={styles.button}>
                            Locatie bekijken
                        </a>
                    </p>
                    <br/>
                    <p href="#" className={styles.photo}>
                        <img src={upload.file.url} alt="xx"/>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DetailsPage;