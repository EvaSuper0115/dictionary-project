import React, { useState } from "react";
import axios from "axios";

export default function SearchForm() {
  const [search, setSearch] = useState("");

  function startSearch(response) {
    console.log(response.data[0]);
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
        className="search-bar gradient-text"
        type="search"
        autoFocus="on"
        placeholder="type here..."
      ></input>
      <button className="searchButton" type="submit">
        search
      </button>
    </form>
  );
  return (
    <div className="SearchForm">
      <h2 className="guide-question">What word do you want to look up ? </h2>
      {form}
    </div>
  );
}
