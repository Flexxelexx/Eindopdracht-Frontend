import React, {useEffect, useState} from "react";
import axios from "axios";

function Zoekvisplek() {

    const [fishingspots, setFishingspots] = useState([]);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        async function fetchFishingspots() {
            try {
                const response = await axios.get('http://localhost:8080/fishingspots');
                // console.log(response.data);
                setFishingspots(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchFishingspots();
    }, []);

    const handleCitySelect = (event) => {
        setSelectedCity(event.target.value);
    };

    const uniqueCities = [...new Set(fishingspots.map(fishingspot => fishingspot.city))];

    return (
        <div>
            <select onChange={handleCitySelect}>
                <option value="">Selecteer een stad</option>
                {uniqueCities.map(city => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            {selectedCity && (
                <ul>
                    {fishingspots
                        .filter(fishingspot => fishingspot.city === selectedCity)
                        .map(fishingspot => (
                            <li key={fishingspot.id}>
                                {fishingspot.name} - {fishingspot.location}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    );
}

export default Zoekvisplek;
