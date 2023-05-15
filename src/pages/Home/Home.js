import React, {useEffect} from "react";

import styles from "../Home/Home.module.css";
import photo from "../../assets/4.jpg";
import Card from "../../components/Card/Card";

function Home() {
    useEffect(() => {
        document.title = "Home FISHiT";
    }, []);

    return (
        <div className="outer-container">
            <div className="inner-container" id={styles.content}>

                <Card>
                    <h1>WELKOM BIJ FiSHiT!</h1>
                    <br/>
                    <h3> Hier kan jij jouw vangsten opslaan!</h3>
                    <h3>Je kan ook naar vangsten van andere mensen kijken.</h3>
                    <br/>
                    <h3>
                        Vergeet niet eerst in te loggen zodat je optimaal gebruik kunt maken
                        van de website!
                    </h3>
                    <br/>
                    <h2>Happy Hunting!</h2>
                    <img className={styles.welkomphoto} src={photo} alt="logo"/>
                </Card>
            </div>
        </div>
    );
}

export default Home;
