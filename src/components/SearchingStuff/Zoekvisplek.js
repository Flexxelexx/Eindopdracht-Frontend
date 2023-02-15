import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Vispleklijst} from "./Vispleklijst";

function Zoekvisplek() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);

  // const items = [
  //   "Alblasserdam",
  //   "Bodegraven",
  //   "Boskoop",
  //   "Gorinchem",
  //   "Gouda",
  //   "Haastrecht",
  //   "Oudewater",
  //   "Rotterdam",
  //   "Waddinxveen",
  //   "Zevenhuizen"
  // ];

  const handleClick = () => {
    setShowList(!showList);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // const filteredItems = items.filter((item) =>
  //   item.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onClick={handleClick}
      />
      {showList && (
        <ul>
          {Vispleklijst.map((item, index) => (
            <li key={index}>
              <NavLink
              to={item.path}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Zoekvisplek;
