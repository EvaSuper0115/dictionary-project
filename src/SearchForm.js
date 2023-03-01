import React, { useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    alert(`${search}`);
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
