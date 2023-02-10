import React, { useEffect } from "react";

import styles from "../Admin/Admin.module.css";
import { FaFish } from "react-icons/fa";

function AdminPortal() {
  useEffect(() => {
    document.title = "Admin Portal";
  }, []);

  return (
    <div className="outer-container">
      <div className="inner-container" id={styles.content}>
        <div>
          <form className={styles.loginform}>
            <h3>Admin dashboard</h3>

            <div className={styles.fishLogo}>
              <FaFish />
            </div>

            <label>Name</label>

            <input className="formInput" type="text" />
            <label>PW</label>
            <input className="formInput" type="password" />
            <button className={styles.buttoncontainer}> Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPortal;
