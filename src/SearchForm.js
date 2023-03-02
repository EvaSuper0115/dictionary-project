import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
export default function SearchForm() {
  const [search, setSearch] = useState("");

  const [results, setResults] = useState(null);
  function startSearch(response) {
    setResults(response.data[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (search.length > 0) {
      //documentation:https://dictionaryapi.dev/
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
      axios.get(apiUrl).then(startSearch);
    }
  }
  function handleChange(event) {
    setSearch(event.target.value.trim());
  }

  let form = (
    <form onSubmit={handleSubmit} className="form" autoComplete="off">
      <input
        onChange={handleChange}
        className="search-bar"
        type="search"
        autoFocus="on"
        placeholder="type here..."
      ></input>
      <button className="searchButton" type="submit" title="search">
        search
      </button>
    </form>
  );
  if (results === null) {
    return (
      <div className="SearchForm">
        <h2 className="guide-question">What word do you want to look up ? </h2>
        {form}
        <h2 className="guide-question small">
          Find out meanings, pronunciations, how to put them in a sentence, and
          many more.
        </h2>
      </div>
    );
  } else {
    return (
      <div className="SearchForm">
        <h2 className="guide-question">What word do you want to look up ? </h2>
        {form}
        <Results results={results} />
      </div>
    );
  }
}
