import React, {useContext, useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import styles from "../UserPage/UserPage.module.css";
import {ThemeContext} from "../../components/ThemeContext/ThemeContext";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";
import {AiOutlineDelete} from "react-icons/ai";

function UserPage() {


    const location = useLocation();
    const {upload} = location.state;

    const token = localStorage.getItem('token');
    const {boxjes} = useContext(ThemeContext);
    const {user} = useContext(AuthContext);
    const userRole = user.rolename;
    const [isDeleted, setIsDeleted] = useState(false);
    const [users, setUsers] = useState([]);


    useEffect(() => {
        document.title = `${upload.username} - Profiel`;
    }, [upload.username]);

    async function DeleteUser () {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };

        try {
            const result = await axios.delete(`http://localhost:8080/users/${upload.id.user}/deleteuser`, config);
            console.log(`deleted user: ${upload.id.user}`)
            setIsDeleted(true)
            console.log(result)
        } catch (e) {
            console.log(e)
            setIsDeleted(false)
        }
    }

    useEffect(() => {
        async function fetchUsers() {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {Authorization: `Bearer ${token}`}
                };
                const response = await axios.get('http://localhost:8080/users', config);
                setUsers(response.data);
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchUsers();
    }, [isDeleted]);



    const [uploads, setUploads] = useState([]);

    const userUploads = uploads.filter((upload) => {
        return upload.username === location.state.upload.username;

    })
    console.log(upload.username)
    useEffect(() => {
        async function fetchUploads() {
            try {
                const token = localStorage.getItem('token')
                const config = {
                    headers: {Authorization: `Bearer ${token}`}
                };
                const response = await axios.get('http://localhost:8080/uploads', config);
                setUploads(response.data);
                // console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchUploads();
    }, []);


    return (
        <div className="outer-container">
            <div className="inner-container">
                <div style={{WebkitBoxShadow: boxjes}} className={styles.welkom}>
                    <h2>{upload.username}</h2>
                    <br/>
                    {userRole === 'ROLE_ADMIN' &&
                            <button
                                onClick={() => DeleteUser(upload.id.user)}
                                className={styles.button}>
                                <AiOutlineDelete/>
                            </button>}
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
                                        upload.file && upload.file.url !== null ? (
                                            <td><img src={upload.file.url} alt="xx"/></td>
                                        ) : (
                                            <td><p>Geen foto geupload</p></td>)
                                    }
                                    <td>{upload.speciesFish}</td>
                                    <td>{upload.weightFish}</td>
                                    <td>{upload.lengthFish}</td>
                                    <td>{upload.cityCaught}</td>
                                    <td>
                                        <a href={upload.locationCaught} target={"_blank"} rel="noreferrer"
                                           className={styles.button}>Bekijken</a>
                                    </td>
                                    <td>
                                        <Link
                                            className={styles.button}
                                            to={{
                                                pathname: `/details/${upload.id}`,
                                                state: {upload}
                                            }}>Bekijken</Link>
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