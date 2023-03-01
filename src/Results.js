import React from "react";
import Meanings from "./Meanings.js";
export default function Results(props) {
  let word = props.results.word;

  return (
    <div className="Results">
      <div className="word"> {word}</div>
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
