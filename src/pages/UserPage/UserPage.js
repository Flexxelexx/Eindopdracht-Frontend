import React, {useContext, useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import styles from "../UserPage/UserPage.module.css";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import axios from "axios";

function UserPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                const response = await axios.get('http://localhost:8080/users', config);
                setUsers(response.data);
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchUsers();
    }, []);


    const location = useLocation();
    const {upload} = location.state;

    const [uploads, setUploads] = useState([]);

    const userUploads = uploads.filter((upload) => {
        return upload.username === location.state.upload.username;
    })

    useEffect(() => {
        async function fetchUploads() {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                const response = await axios.get('http://localhost:8080/uploads/', config);
                setUploads(response.data);
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchUploads();
    }, []);


    const {boxjes} = useContext(ThemeContext);

    useEffect(() => {
        document.title = `${upload.username} - Profiel`;
    }, [upload.username]);

    return (
        <div className="outer-container">
            <div className="inner-container">
                <div style={{WebkitBoxShadow: boxjes}} className={styles.welkom}>
                    <h2>{upload.username}</h2>
                    <br/>
                    <p>Alle vangsten van {upload.username}:</p>
                    <table>
                        <thead>
                        <tr>
                            <th>VangstNR</th>
                            <th>Foto</th>
                            <th>Soort vis</th>
                            <th>Gewicht in kg</th>
                            <th>Lengte in cm</th>
                            <th>Plaatsnaam</th>
                            <th>Locatie</th>
                            <th>Upload Bekijken</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userUploads.map((upload) => {
                            return (
                                <tr key={upload.id}>
                                    <td>{upload.id}</td>
                                    {
                                        upload.file.url !== null ?
                                            <td><img src={upload.file.url} alt="xx"/></td> : <p>Geen foto</p>
                                    }
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
    );
}

export default UserPage;