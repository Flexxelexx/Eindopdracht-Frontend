import React, {useContext, useEffect, useState} from "react";
import styles from "./Zoeken.module.css"
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
// import Zoekvis from "../../components/SearchingStuff/Zoekvis";
// import Zoekvisplek from "../../components/SearchingStuff/Zoekvisplek";


import axios from "axios";
import {Link} from "react-router-dom";

function Zoeken() {
    const [uploads, setUploads] = useState([]);
    const [users, setUsers] = useState([]);

    const [sortColumn, setSortColumn] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');

    const {boxjes} = useContext(ThemeContext);

    const sortedUploads = [...uploads].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a[sortColumn] < b[sortColumn] ? -1 : 1;
        } else {
            return a[sortColumn] > b[sortColumn] ? -1 : 1;
        }
    });

    function handleSort(column) {
        if (column === sortColumn) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    }

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get('http://localhost:8080/users');
                setUsers(response.data);
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        async function fetchUploads() {
            try {
                const response = await axios.get('http://localhost:8080/uploads');
                setUploads(response.data);
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchUploads();
    }, []);


    useEffect(() => {
        document.title = "Zoeken";
    }, []);


    return (
        <>
            <div className="outer-container">
                <div className="inner-container" id={styles.content}>
                    <div style={{WebkitBoxShadow: boxjes}} className={styles.welkom}>
                        <h2>Zie hier alle uploads :</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>VangstNR</th>
                                <th> Foto</th>
                                <th>Gevangen door:</th>
                                <th onClick={() => handleSort('speciesFish')}>
                                    Soort
                                    vis {sortColumn === 'speciesFish' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('weightFish')}>
                                    Gewicht in
                                    kg {sortColumn === 'weightFish' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('lengthFish')}>
                                    Lengte in
                                    cm {sortColumn === 'lengthFish' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('cityCaught')}>
                                    Plaatsnaam {sortColumn === 'cityCaught' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('locationCaught')}>
                                    Locatie {sortColumn === 'locationCaught' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th>Upload Bekijken</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sortedUploads.map((upload) => {
                                return (
                                    <tr key={upload.id}>
                                        <td>{upload.id}</td>
                                        {
                                            upload.file.url !== null ?
                                                <td><img src={upload.file.url} alt="xx"/></td> : <p>Geen foto</p>
                                        }
                                        <td>{upload.username}</td>
                                        <td>{upload.speciesFish}</td>
                                        <td>{upload.weightFish}</td>
                                        <td>{upload.lengthFish}</td>
                                        <td>{upload.cityCaught}</td>
                                        <td>
                                            <a href={upload.locationCaught} target={"_blank"} rel="noreferrer">Locatie
                                                bekijken</a>
                                        </td>
                                        <td>
                                            <Link to={{
                                                pathname: `/details/${upload.id}`,
                                                state: {upload}
                                            }}>bekijken</Link>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
        ;

}

export default Zoeken;
