import React from "react";
import Meanings from "./Meanings.js";
export default function Results(props) {
  return (
    <div className="Results">
      <div className="word"> {props.results.word}</div>
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
