import React, {useEffect, useState} from "react";
import {BsFillSunFill} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'


import styles from './SwitchTheme.module.css'

function SwitchTheme() {

    const lettertypkleur = {
        Licht: '#253237',
        Donker: '#FF0000'
    }

    const achtergrondkleuren = {
        Licht: '#caf0f8',
        Donker: '#253237'
    }

    const navlinkkleur = {
        Licht: '#253237',
        Donker: '#FF0000'
    }

    const buttonkleur = {
        Licht: '#253237',
        Donker: '#FF0000'
    }

    const [kleur, setKleur] = useState(achtergrondkleuren.Licht)
    const [kleuren, setKleuren] = useState(lettertypkleur.Licht)
    const [navlink, setNavlink] = useState(navlinkkleur.Licht)
    const [knopkleur, setKnopkleur] = useState(buttonkleur.Licht)

    useEffect(
        () => {
            document.body.style.background = kleur
        },
        [kleur]
    )
    useEffect(
        () => {
            document.body.style.color = kleuren
        },
        [kleuren]
    )
    useEffect(
        () => {
            const links = document.querySelectorAll('a');
            links.forEach(link => {
                link.style.color = navlink;
            });
        },
        [navlink]
    )
    useEffect(
        () => {
            document.body.style.color = knopkleur
        },
        [knopkleur]
    )

    const switchKleur = () => {
        const newAchtergrond = kleur === achtergrondkleuren.Donker ? achtergrondkleuren.Licht : achtergrondkleuren.Donker
        const newLettertype = kleuren === lettertypkleur.Licht ? lettertypkleur.Donker : lettertypkleur.Licht
        const newNavlink = navlink === navlinkkleur.Licht ? navlinkkleur.Donker : navlinkkleur.Licht
        const newKnopKleur = knopkleur === buttonkleur.Licht ? buttonkleur.Donker : buttonkleur.Licht

        setKleur(newAchtergrond)
        setKleuren(newLettertype)
        setNavlink(newNavlink)
        setKnopkleur(newKnopKleur)

    }

    return (
        <>
            <button
                style={{color: knopkleur}}
                className={styles.buttoncontainer}
                onClick={switchKleur}
            >
                {kleur === achtergrondkleuren.Licht ? <i className="fa-solid fa-lightbulb fa-3x"></i> :
                    <i className="fa-regular fa-lightbulb fa-3x fa-bounce"></i>
                }
            </button>
        </>
    )
}

export default SwitchTheme;