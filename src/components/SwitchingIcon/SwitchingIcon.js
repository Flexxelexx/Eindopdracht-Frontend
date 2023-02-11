import React, { useState } from "react";

import styles from "./SwitchingIcon.module.css"

function SwitchingIcon() {
  const whichicon = {
    Licht: "fa-solid fa-house-user fa-2x",
    Donker: "fa-solid fa-ghost fa-2x"
  };

  const [icoon, setIcoon] = useState(whichicon.Licht)


  const switchIcon = () => {

    const newIcon = icoon === whichicon.Donker ? whichicon.Licht : whichicon.Donker;

    setIcoon(newIcon)
  };

  return (
    <>
      <button
        style={{ color: icoon }}
        className={styles.buttoncontainer}
        onClick={switchIcon}
      >
        {icoon === whichicon.Licht ? (
          <i id={styles.lampje} className="fa-solid fa-ghost fa-2x"/>
        ) : (
          <i id={styles.lampje} className="fa-solid fa-home-user fa-2x"/>
        )}
      </button>
    </>
  );
}

export default SwitchingIcon;