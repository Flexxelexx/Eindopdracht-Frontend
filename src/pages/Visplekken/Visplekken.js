import React, {useEffect} from "react";
import styles from '../Visplekken/Visplekken.module.css'
import {FaFish} from "react-icons/fa";
import midlogo from "../../assets/4.jpg";
import SearchBar from "../../components/SearchBar/SearchBar";


function Visplekken() {

    useEffect(() => {
        document.title = "Visplekken";
    }, []);

    return (

        <div className='outer-container'>
            <div className="inner-container" id={styles.content}>
                <div>
                    <form className={styles.loginForm}>

                        <h5>Welkom terug !name </h5>
                        <div className={styles.fishLogo}><FaFish/></div>
                        <li>CONTENT !totaal gevangen! : xxx</li>
                        <li>CONTENT !totaal gewicht! : xxx</li>
                        <li>CONTENT !totale lengte! : xxx</li>

                        <button className={styles.buttoncontainer}>Naar je portfolio</button>
                        <button className={styles.buttoncontainer}>Uitloggen</button>
                    </form>

                    <div className={styles.searchbar}>
                        <SearchBar/>
                    </div>
                </div>

                <div className={styles.midcontent}>
                    <h1>Zoek hieronder op stekken️</h1>
                    <h3>BLABLABLA CONTENT</h3>
                    <h3>BLABLABLA CONTENT</h3>
                    <h3>BLABLABLA CONTENT</h3>
                    <h3>BLABLABLA CONTENT</h3>

                    <div>
                    <input className='searchinput' type="search" name="search"
                           placeholder="Waar zoek je naar?"/>
                    <button className={styles.buttoncontainer}>
                        Zoeken!
                    </button>
                    </div>
                </div>
            </div>
        </div>


    )
        ;
}

export default Visplekken;