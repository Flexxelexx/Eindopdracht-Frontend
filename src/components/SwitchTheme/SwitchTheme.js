import React, {useEffect, useState} from "react";
import {BsFillSunFill} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'


import styles from './SwitchTheme.module.css'

function SwitchTheme() {

    const lettertypkleur = {
        Licht: '#253237',
        Donker: '#e0fbfc'
    }

    const achtergrondkleuren = {
        Licht: '#e0fbfc',
        Donker: '#253237'
    }
    const [kleur, setKleur] = useState(achtergrondkleuren.Licht)
    const [kleuren, setKleuren] = useState(lettertypkleur.Licht)

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

    const switchKleur = () => {
        const newAchtergrond = kleur === achtergrondkleuren.Donker ? achtergrondkleuren.Licht : achtergrondkleuren.Donker
        const newLetterype = kleuren === lettertypkleur.Licht ? lettertypkleur.Donker : lettertypkleur.Licht

        setKleur(newAchtergrond)
        setKleuren(newLetterype)
    }

    return (
        <>
            <button
                className={styles.buttoncontainer}
                onClick={switchKleur}
            >
                {kleur === achtergrondkleuren.Licht ? 'Licht' : 'Donker'}

            </button>
        </>
    )
}

export default SwitchTheme;