import { React, useState } from "react";
import "./style.css";
// import { Link } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");

  //   const getUsersByLanguage = () => {};

  const handleSearchInput = () => {
    fetch("https://api.github.com/repos/?languages=python")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <div className="container searchPageWrapper" id="searchText">
        Search programming languages to find eligible candidates
        <br />
        <br />
        <form className="searchForm">
          <input
            type="search"
            value={input}
            onInput={(e) => setInput(e.target.value.toLowerCase())}
            name="searchLanguages"
            id="languageInput"
            required
            placeholder="ex: Python, JavaScript"
          />
          <button
            onClick={() => handleSearchInput()}
            id="searchBtn"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
