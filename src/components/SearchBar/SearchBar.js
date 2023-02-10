import React  from "react";

import styles from "../SearchBar/Searchbar.module.css";

import "./Searchbar.module.css";

const SearchBar = () => {
  return (
    <form action="/" method="get">
      <label htmlFor="header-search"></label>
      <input
        className="search-input"
        type="text"
        id="header-search"
        placeholder="search.."
        name="s"
      />
      <button type="submit" className={styles.buttoncontainer}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
