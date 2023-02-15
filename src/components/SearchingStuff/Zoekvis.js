import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { Vislijst } from "./Vislijst";

function Zoekvis() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(false);
  // const items = [
  //   "Aal",
  //   "Baars",
  //   "Barbeel",
  //   "Brasem",
  //   "Brasemblei",
  //   "Kolblei",
  //   "Karper",
  //   "Sneep",
  //   "Snoek",
  //   "Zeelt"
  // ];

  const handleClick = () => {
    setShowList(!showList);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  //
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
          {Vislijst.map((item, index) => (
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

export default Zoekvis;
