import React, {useContext, useEffect, useState} from "react";
import styles from "./Zoeken.module.css";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";

import axios from "axios";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {AiOutlineDelete} from "react-icons/ai";
import Card from "../../components/Card/Card";

function Zoeken(e) {
    useEffect(() => {
        document.title = "Zoeken";
    }, []);

    const token = localStorage.getItem("token");
    const [uploads, setUploads] = useState([]);
    const [users, setUsers] = useState([]);
    const [isDeleted, setIsDeleted] = useState(false);

    const {user} = useContext(AuthContext);
    const userRole = user.rolename;

    const [sortColumn, setSortColumn] = useState("id");
    const [sortDirection, setSortDirection] = useState("asc");

    const {boxjes} = useContext(ThemeContext);

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

    async function DeleteUpload(uploadID) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        try {
            const result = await axios.delete(
                `http://localhost:8080/uploads/${uploadID}`,
                config
            );
            console.log(`deleted upload: ${uploadID}`);
            setIsDeleted(true);
            console.log(result);
        } catch (e) {
            console.log(e);
            setIsDeleted(false);
        }
    }

    useEffect(() => {
        async function fetchUsers() {
            try {
                const token = localStorage.getItem("token");
                const config = {
                    headers: {Authorization: `Bearer ${token}`},
                };
                const response = await axios.get("http://localhost:8080/users", config);
                setUsers(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchUsers();
    }, []);

    useEffect(() => {
        async function fetchUploads() {
            try {
                const token = localStorage.getItem("token");
                const config = {
                    headers: {Authorization: `Bearer ${token}`},
                };
                const response = await axios.get(
                    "http://localhost:8080/uploads",
                    config
                );
                setUploads(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchUploads();
    }, []);

    return (
        <>
            <div className="outer-container">
                <div className="inner-container" id={styles.content}>
                    <Card>
                        <h2>Zie hier alle vangsten :</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>VangstNR</th>
                                <th> Foto</th>
                                <th>Gevangen door:</th>
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
                                    Lengte{" "}
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
                                <th>Upload bekijken</th>
                                {userRole === "ROLE_ADMIN" && <th>Verwijderen</th>}
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
                                        <td>{upload.username}</td>
                                        <td>{upload.speciesFish}</td>
                                        <td>{upload.weightFish} kg</td>
                                        <td>{upload.lengthFish} m</td>
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
                                        {userRole === "ROLE_ADMIN" && (
                                            <td>
                                                <button
                                                    onClick={() => DeleteUpload(upload.id)}
                                                    className={styles.button}
                                                >
                                                    <AiOutlineDelete/>
                                                </button>
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </Card>
                </div>
            </div>
        </>
    );
}

export default Zoeken;
