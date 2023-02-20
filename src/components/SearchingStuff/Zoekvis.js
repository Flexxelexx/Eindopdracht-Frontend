import React, {useEffect, useState} from "react";
import axios from "axios";

function Zoekvis() {

  const [uploads, setUploads] = useState([]);
  const [selectedUploads, setSelecteduploads] = useState(null)

  useEffect(() => {
    async function fetchSpecies() {
      try {
        const response = await axios.get('http://localhost:8080/uploads');
        // console.log(response.data);
        setUploads(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchSpecies();
  }, []);

  const handleSpecieSelect = (event) => {
    setSelecteduploads(event.target.value);
  };

  const uniqueSpecies = [...new Set(uploads.map(upload => upload.speciesFish))];

  return (
      <div>
        <select onChange={handleSpecieSelect}>
          <option value="">
            Selecteer een soort
          </option>
          {uniqueSpecies.map(speciesFish => (
              <option key={speciesFish} value={speciesFish}>
                {speciesFish}
              </option>
          ))}
        </select>
        {selectedUploads && (
            <ul>
              {uploads
                  .filter(upload => upload.speciesFish === selectedUploads)
                  .map(upload => (
                      <li key={upload.id}>
                        {upload.name} - {upload.location}
                      </li>
                  ))}

            </ul>
        )}
      </div>
  )
}


export default Zoekvis;
