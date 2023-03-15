import React, {useContext, useEffect} from "react";
import {AuthContext} from "../../components/AuthContext/AuthContext";


function Account() {

    useEffect(() => {
        document.title = "Account";
    }, []);


    const { user } = useContext(AuthContext);

        return (
            <main className="container">
                <div>
                    <h1>Welcome, {user.username}!</h1>
                    <p>Email: {user.email}</p>
                    <p>Uploads:</p>
                </div>
            </main>
        );
    }

    export default Account;
