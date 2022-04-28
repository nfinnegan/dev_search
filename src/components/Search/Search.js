import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <div className="container searchPageWrapper" id="searchText">
        Search programming languages to find eligible candidates
        <br />
        <br />
        <form className="searchForm">
          <input
            type="search"
            name="searchLanguages"
            id="languageInput"
            required
            placeholder="ex: Python, JavaScript"
          />
          <button id="searchBtn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
