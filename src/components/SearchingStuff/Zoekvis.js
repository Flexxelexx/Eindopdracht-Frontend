import React, {useEffect, useState} from "react";
import axios from "axios";

function Zoekvis() {

  const [speciesfish, setSpeciesfish] = useState([]);
  const [selectedSpecie, setSelectedspecie] = useState(null)

  useEffect(() => {
    async function fetchSpecies() {
      try {
        const response = await axios.get('http://localhost:8080/uploads/species/Aal');
        console.log(response.data);
        setSpeciesfish(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchSpecies();
  }, []);

  const handleSpecieSelect = (event) => {
    setSelectedspecie(event.target.value);
  };

  const uniqueSpecies = [...new Set(speciesfish.map(specie => specie.specie))];

  return (
      <div>
        <select onChange={handleSpecieSelect}>
          <option value="">
            Selecteer een soort
          </option>
          {uniqueSpecies.map(specie => (
              <option key={specie} value={specie}>
                {specie}
              </option>
          ))}
        </select>
        {selectedSpecie && (
            <ul>
              {speciesfish
                  .filter(specie => specie.specie === selectedSpecie)
                  .map(specie => (
                      <li key={specie.id}>
                        {specie.name} - {specie.location}
                      </li>
                  ))}

            </ul>
        )}
      </div>
  )
}


export default Zoekvis;
