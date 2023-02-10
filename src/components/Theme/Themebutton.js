import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import React from "react";
import useLocalStorage from "use-local-storage";

function Themebutton() {
  const defaultDark = window.matchMedia(
    "(prefers-color-scheme: donker)"
  ).matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "donker" : "licht"
  );

  const switchTheme = () => {
    const newTheme = theme === "donker" ? "licht" : "donker";
    setTheme(newTheme);
  };

  return (
    <div>
      <button className="themebtn" onClick={switchTheme}>
        {" "}
        {theme === "donker" ? <BsFillSunFill /> : <MdDarkMode />}
      </button>
    </div>
  );
}

export default Themebutton();
