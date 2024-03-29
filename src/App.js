import "./App.css";
import React from "react";
import SearchForm from "./SearchForm.js";
function App() {
  return (
    <div className="App app-container">
      <h1 className="App-header">Dictionary</h1>
      <p className="link-to-api-document">
        Definitions from dictionaryapi.dev{" "}
        <span>
          <a
            href="https://dictionaryapi.dev/"
            title="see API document"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-circle-info"></i>
          </a>
        </span>
      </p>
      <SearchForm />
      <footer>
        Dictionary App was designed and coded with{" "}
        <span className="margin-right">
          <i className="fa-brands fa-react"></i>
        </span>
        React by{" "}
        <a
          className="gradient-text"
          href="https://ontaito.com/"
          target="_blank"
          rel="noreferrer"
          title="On Tai To's portfolio"
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
          title="Dictionary App source code"
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
