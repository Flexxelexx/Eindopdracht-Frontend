import React, {useState} from "react";

import './Searchbar.css';

const SearchBar = () => {
    return (
    <form action="/" method="get">
         <label htmlFor="header-search">
             <span className="visually-hidden">Search..</span>
         </label>
        <input
            className='search-input'
        type="text"
        id="header-search"
        placeholder="search.."
        name="s"
        />
        <button type="submit" className='searchbtn'>Search</button>
    </form>
    )
}


export default SearchBar;