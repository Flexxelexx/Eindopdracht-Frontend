import React, { useEffect, useState } from "react";

import styles from "./SwitchTheme.module.css";

function SwitchTheme() {
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
    Licht: "#DC143C",
    Donker: "#111111",
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
    document.body.style.boxShadow = boxjes;
  });

  const switchKleur = () => {
    console.log("before switch:", kleur, boxjes);

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

    console.log("after switch:", kleur, boxjes);
  };

  return (
    <>
      <button
        style={{ color: knopkleur }}
        className={styles.buttoncontainer}
        onClick={switchKleur}
      >
        {kleur === achtergrondkleuren.Licht ? (
          <i className="fa-solid fa-lightbulb fa-2x">Aan</i>
        ) : (
          <i className="fa-solid fa-lightbulb fa-2x">Uit</i>
        )}
      </button>
    </>
  );
}

export default SwitchTheme;
