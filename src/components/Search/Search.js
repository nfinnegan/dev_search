import React from "react";
// import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div>
      <aside>
        Search programming languages to find eligible candidates
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
