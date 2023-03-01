import React from "react";
import Meanings from "./Meanings.js";
export default function Results(props) {
  return (
    <div className="Results">
      <div className="word gradient-text">
        {" "}
        <a href={props.results.sourceUrls} target="_blank" rel="noopener">
          {" "}
          {props.results.word}
        </a>{" "}
      </div>
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
