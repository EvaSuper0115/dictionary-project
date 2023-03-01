import "./App.css";
import React from "react";
import SearchForm from "./SearchForm.js";
function App() {
  return (
    <div className="App app-container">
      <h1 className="App-header">Dictionary</h1>
      <SearchForm />
      <footer>
        Dictionary App was designed and coded with React by{" "}
        <a
          className="gradient-text"
          href="https://golden-madeleine-3016d7.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          On Tai To
        </a>
        , it is open-sourced on
        <a
          className="gradient-text"
          href="https://github.com/EvaSuper0115/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub{" "}
        </a>
        and hosted on Netlify.
      </footer>
    </div>
  );
}

export default App;
