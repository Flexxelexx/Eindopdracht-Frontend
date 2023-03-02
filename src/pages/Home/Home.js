import React, {useContext, useEffect} from "react";

import styles from "../Home/Home.module.css";
import photo from "../../assets/4.jpg";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import LoginComp from "../../components/Login/LoginComp";

function Home() {
    useEffect(() => {
        document.title = "Home FISHiT";
    }, []);

    const {boxjes} = useContext(ThemeContext);

    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.content}>

                <div>
                    <LoginComp/>
                </div>

                <div style={{WebkitBoxShadow: boxjes}} className={styles.welkom}>
                    <h1>WELKOM BIJ FiSHiT!</h1>
                    <br/>
                    <h3> Hier kan jij jouw vangsten opslaan!</h3>
                    <h3>Je kan ook naar vangsten van andere mensen kijken.</h3>
                    <br/>
                    <h3>
                        Vergeet niet eerst in te loggen zodat je optimaal gebruik kunt maken
                        van de website!{" "}
                    </h3>
                    <br/>
                    <h2>Happy Hunting!</h2>
                    <img className={styles.welkomphoto} src={photo} alt="logo"/>
                </div>
            </div>

        </div>
    );
}

export default Home;
