import React from "react";
import Meanings from "./Meanings.js";
export default function Results(props) {
  return (
    <div className="Results">
      <span className="word gradient-text"> {props.results.word}</span>
      <span>
        <a
          href={props.results.sourceUrls}
          title="wiktionary"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-circle-info font-icon"></i>
        </a>
      </span>
      <div className="phonetic"> {props.results.phonetic}</div>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meanings meaning={meaning} />
          </div>
        );
      })}
    </div>
  );
}
