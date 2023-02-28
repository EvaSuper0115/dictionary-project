import React from "react";

export default function SearchForm() {
  let form = (
    <form className="form" autoComplete="off">
      <input className="search-bar" type="search" autoFocus="on"></input>
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
