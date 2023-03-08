import React, {useEffect, useState} from "react";
import styles from "../Account/Account.module.css";
import axios from "axios";


function Account() {

    const [user, setUser] = useState({});

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axios.get(`http://localhost:8080/users/`);
                setUser(response.data);
                console.log(response.data)
            } catch (e) {
                console.error(e)
            }
        }

        fetchUser();
    }, []);


    return (
        <>
            {user && (
                <div className="outer-container">
                    <div className="inner-container" id={styles.content}>
                        <div>
                            <p>{user.firstname}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.dob}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Account;
