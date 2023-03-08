import React, {useContext} from "react";

import styles from "../OverOns/OverOns.module.css"

import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import {FaFish} from "react-icons/fa";


function OverOns() {

    const {boxjes} = useContext(ThemeContext);

    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.content}>

                <div style={{WebkitBoxShadow: boxjes}} className={styles.welkom}>
                    <div className={styles.fishLogo}>
                        <FaFish/>
                    </div>
                    <p>Welkom bij onze website voor visliefhebbers! Hier kun je al je visvangsten opslaan en delen met
                        andere enthousiaste vissers.</p>
                    <br/>
                    <p>Onze oprichter, Jan, begon met vissen toen hij nog een jongen was en heeft sindsdien een passie
                        voor deze sport ontwikkeld. Hij reisde de hele wereld over om te vissen en vond het altijd
                        jammer dat hij zijn vangsten niet op een centrale plek kon opslaan en delen.</p>
                    <br/>
                    <p> Dat is waarom hij deze website heeft opgericht. Hier kunnen vissers van over de hele wereld hun
                        ervaringen en vangsten delen, foto's plaatsen en in contact komen met gelijkgestemde zielen. Of
                        je nu een beginnende visser bent of een doorgewinterde expert, bij ons ben je aan het juiste
                        adres.</p>
                    <br/>
                    <p> We hopen dat je net zo enthousiast bent als wij en kijken er naar uit om je visvangsten te
                        zien!</p>
                    <br/>
                    <div className={styles.fishLogo}>
                        <FaFish/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverOns;