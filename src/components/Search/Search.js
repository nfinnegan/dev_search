import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <aside className="container searchPageWrapper" id="searchText">
        Search programming languages to find eligible candidates
        <br />
        <br />
        <input
          type="text"
          name="searchLanguages"
          id="languageInput"
          placeholder="ex: Python, JavaScript"
        ></input>
      </aside>
    </div>
  );
};

export default Search;
