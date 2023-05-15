import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import styles from "./Account.module.css";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import Card from "../../components/Card/Card";

function Account() {
    const token = localStorage.getItem("token");

    const [uploads, setUploads] = useState([]);
    const {boxjes} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);

    const [sortColumn, setSortColumn] = useState("id");
    const [sortDirection, setSortDirection] = useState("asc");

    const sortedUploads = [...uploads].sort((a, b) => {
        if (sortDirection === "asc") {
            return a[sortColumn] < b[sortColumn] ? -1 : 1;
        } else {
            return a[sortColumn] > b[sortColumn] ? -1 : 1;
        }
    });

    function handleSort(column) {
        if (column === sortColumn) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    }

    useEffect(() => {
        document.title = "Account";
    }, []);

    useEffect(() => {
        async function fetchData() {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            try {
                const result = await axios.get(
                    `http://localhost:8080/uploads/user/${user.username}`,
                    config
                );
                console.log(result.data);
                setUploads(result.data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="outer-container">
            <div className="inner-container">
                <Card>
                    <h1>Welcome, {user.username}!</h1>
                    <h3>Dit zijn jouw uploads:</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>VangstNR</th>
                            <th> Foto</th>
                            <th onClick={() => handleSort("speciesFish")}>
                                Soort vis{" "}
                                {sortColumn === "speciesFish" &&
                                    (sortDirection === "asc" ? "↕" : "↕")}
                            </th>
                            <th onClick={() => handleSort("weightFish")}>
                                Gewicht in kg{" "}
                                {sortColumn === "weightFish" &&
                                    (sortDirection === "asc" ? "↕" : "↕")}
                            </th>
                            <th onClick={() => handleSort("lengthFish")}>
                                Lengte in cm{" "}
                                {sortColumn === "lengthFish" &&
                                    (sortDirection === "asc" ? "↕" : "↕")}
                            </th>
                            <th onClick={() => handleSort("cityCaught")}>
                                Plaatsnaam{" "}
                                {sortColumn === "cityCaught" &&
                                    (sortDirection === "asc" ? "↕" : "↕")}
                            </th>
                            <th onClick={() => handleSort("locationCaught")}>
                                Locatie{" "}
                                {sortColumn === "locationCaught" &&
                                    (sortDirection === "asc" ? "↕" : "↕")}
                            </th>
                            <th>Upload Bekijken</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sortedUploads.map((upload) => {
                            return (
                                <tr key={upload.id}>
                                    <td>{upload.id}</td>
                                    {upload.file && upload.file.url !== null ? (
                                        <td>
                                            <img src={upload.file.url} alt="xx"/>
                                        </td>
                                    ) : (
                                        <td>
                                            <p>Geen foto geupload</p>
                                        </td>
                                    )}
                                    <td>{upload.speciesFish}</td>
                                    <td>{upload.weightFish}</td>
                                    <td>{upload.lengthFish}</td>
                                    <td>{upload.cityCaught}</td>
                                    <td>
                                        <a
                                            href={upload.locationCaught}
                                            target={"_blank"}
                                            rel="noreferrer"
                                            className={styles.button}
                                        >
                                            Bekijken
                                        </a>
                                    </td>
                                    <td>
                                        <Link
                                            className={styles.button}
                                            to={{
                                                pathname: `/details/${upload.id}`,
                                                state: {upload},
                                            }}
                                        >
                                            Bekijken
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </Card>
            </div>
        </div>
    );
}

export default Account;
