import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import login from "../Login/Login";
import {Link} from "react-router-dom";


function Account() {
    const token = localStorage.getItem('token');

    const [uploads, setUploads] = useState([]);

    const {user} = useContext(AuthContext);

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
        document.title = "Account";
    }, []);

    useEffect(() => {
        async function fetchData() {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            };
            try {
                const result = await axios.get(`http://localhost:8080/uploads/user/${user.username}`, config);
                console.log(result.data)
                setUploads(result.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetchData();
    }, [])


    return (
        <main className="container">
            <div>
                <h1>Welcome, {user.username}!</h1>
                <p>Dit zijn jouw uploads:</p>
                <div>
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
        </main>
    )
}

export default Account;
