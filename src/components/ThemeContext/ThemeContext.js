import React, { useState, createContext, useEffect } from "react";

const ThemeContext = createContext({});

function ThemeContextProvider({ children }) {
  const lettertypkleur = {
    Licht: "#253237",
    Donker: "#FF0000",
  };

  const achtergrondkleuren = {
    Licht: "#caf0f8",
    Donker: "#253237",
  };

  const navlinkkleur = {
    Licht: "#253237",
    Donker: "#FF0000",
  };

  const buttonkleur = {
    Licht: "#253237",
    Donker: "#FF0000",
  };

  const boxschaduw = {
    Licht: "7px -8px 9px -1px #DC143C",
    Donker: "7px -8px 9px -1px #0000FF;",
  };
  const [kleur, setKleur] = useState(achtergrondkleuren.Licht);
  const [kleuren, setKleuren] = useState(lettertypkleur.Licht);
  const [navlink, setNavlink] = useState(navlinkkleur.Licht);
  const [knopkleur, setKnopkleur] = useState(buttonkleur.Licht);
  const [boxjes, setBoxjes] = useState(boxschaduw.Licht);

  useEffect(() => {
    document.body.style.background = kleur;
  }, [kleur]);
  useEffect(() => {
    document.body.style.color = kleuren;
  }, [kleuren]);
  useEffect(() => {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.style.color = navlink;
    });
  }, [navlink]);
  useEffect(() => {
    document.body.style.color = knopkleur;
  }, [knopkleur]);
  useEffect(() => {
    document.body.style.WebkitBoxShadow = boxjes;
  });

  const switchKleur = () => {
    console.log("before switch:", boxjes);

    const newAchtergrond =
      kleur === achtergrondkleuren.Donker
        ? achtergrondkleuren.Licht
        : achtergrondkleuren.Donker;
    const newLettertype =
      kleuren === lettertypkleur.Licht
        ? lettertypkleur.Donker
        : lettertypkleur.Licht;
    const newNavlink =
      navlink === navlinkkleur.Licht ? navlinkkleur.Donker : navlinkkleur.Licht;
    const newKnopKleur =
      knopkleur === buttonkleur.Licht ? buttonkleur.Donker : buttonkleur.Licht;
    const newBoxjes =
      boxjes === boxschaduw.Licht ? boxschaduw.Donker : boxschaduw.Licht;

    setKleur(newAchtergrond);
    setKleuren(newLettertype);
    setNavlink(newNavlink);
    setKnopkleur(newKnopKleur);
    setBoxjes(newBoxjes);

    console.log("after switch:", boxjes);
  };

  return (
    <ThemeContext.Provider value={{ kleur, kleuren, boxjes, switchKleur }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeContextProvider };
