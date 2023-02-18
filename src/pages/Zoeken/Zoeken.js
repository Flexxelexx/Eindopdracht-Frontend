import React, {useContext, useEffect, useState} from "react";
import styles from "./Zoeken.module.css"
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import Zoekvis from "../../components/SearchingStuff/Zoekvis";
import Zoekvisplek from "../../components/SearchingStuff/Zoekvisplek";


import axios from "axios";
import {Link} from "react-router-dom";

function Zoeken() {
    const [uploads, setUploads] = useState([]);

    const [sortColumn, setSortColumn] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');

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


    const {boxjes} = useContext(ThemeContext);

    return (
        <>
            <div className="outer-container">
                <div className="inner-container" id={styles.content}>
                    <div style={{WebkitBoxShadow: boxjes}} className={styles.welkom}>
                        <h2>Zoek hier op visplekken of vissen</h2>
                        <br/>
                        <h5>Je kan in deze versie alleen op stad zoeken in visplekken</h5>
                        <br/>
                        <div className={styles.midden}>
                        <label>Zoek op steden</label>
                        <div className={styles.search}>
                            <Zoekvisplek/>
                            <button className={styles.buttoncontainer}>Go!</button>
                            <br/>
                        </div>
                        <label>Zoek op vissoorten</label>
                        <div className={styles.search}>
                            <Zoekvis/>
                            <button className={styles.buttoncontainer}>Go!</button>
                            <br/>
                        </div>
                        </div>
                        <br/>
                        <h2>Zie hier alle uploads :</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>Foto</th>
                                <th onClick={() => handleSort('username')}>
                                    Gevangen door {sortColumn === 'username' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('speciesFish')}>
                                    Soort vis {sortColumn === 'speciesFish' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('weightFish')}>
                                    Gewicht in kg {sortColumn === 'weightFish' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('lengthFish')}>
                                    Lengte in cm {sortColumn === 'lengthFish' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('charsFish')}>
                                    Bijzonderheden {sortColumn === 'charsFish' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th onClick={() => handleSort('locationCaught')}>
                                    Locatie {sortColumn === 'locationCaught' && (sortDirection === 'asc' ? '↕' : '↕')}</th>
                                <th>Bekijken</th>
                            </tr>
                            </thead>
                            <tbody>
                            {sortedUploads.map((upload) => {
                                return <tr key={upload.id}>
                                    <td>XXX</td>
                                    <td>{upload.username}</td>
                                    <td>{upload.speciesFish}</td>
                                    <td>{upload.weightFish}</td>
                                    <td>{upload.lengthFish}</td>
                                    <td>{upload.charsFish}</td>
                                    <td>{upload.locationCaught}</td>
                                    <td>
                                        <Link to={{ pathname: `/details/${upload.id}`, state: { upload } }}>bekijken</Link>
                                    </td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );

}
export default Zoeken;
