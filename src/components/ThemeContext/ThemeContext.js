import React, { useState, createContext } from 'react';

const ThemeContext = createContext({});

function ThemeContextProvider({ children }) {
    const lettertypkleur = {
        Licht: '#253237',
        Donker: '#e0fbfc'
    };

    const achtergrondkleuren = {
        Licht: '#e0fbfc',
        Donker: '#253237'
    };
    const [kleur, setKleur] = useState(achtergrondkleuren.Licht);
    const [kleuren, setKleuren] = useState(lettertypkleur.Licht);

    const switchKleur = () => {
        const newAchtergrond = kleur === achtergrondkleuren.Donker ? achtergrondkleuren.Licht : achtergrondkleuren.Donker;
        const newLetterype = kleuren === lettertypkleur.Licht ? lettertypkleur.Donker : lettertypkleur.Licht;

        setKleur(newAchtergrond);
        setKleuren(newLetterype);
    };

    return (
        <ThemeContext.Provider value={{ kleur, kleuren, switchKleur }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeContextProvider };
