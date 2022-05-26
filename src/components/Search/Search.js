import { React, useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import "./style.css";
// import { Link } from "react-router-dom";

const Search = () => {
  const [input, setInput] = useState("");

  const handleSearchInput = () => {
    const url = `https://api.github.com/search/repositories/?q=language:${input}`;
    console.log(input);
    fetch(url, {
      method: "GET",
      headers: {
        authorization: "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",
        Accept: "application/json",
      },
    })
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
        <form className="container searchForm">
          <input
            type="search"
            value={input}
            onInput={(e) => setInput(e.target.value.toLowerCase())}
            name="searchLanguages"
            id="languageInput"
            required
            placeholder="ex: Python, JavaScript"
          />
          <button onClick={handleSearchInput()} id="searchBtn" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
