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
      {props.results.phonetics.length > 0 &&
        props.results.phonetics.map(function (phonetics, index) {
          return (
            <div key={index} className="phonetic">
              {" "}
              {phonetics.text}
              {phonetics.audio.trim().length > 0 && (
                <a
                  href={phonetics.audio}
                  target="_blank"
                  rel="noreferrer"
                  title="listen"
                >
                  <i className="fa-solid fa-volume-high"></i>
                </a>
              )}
            </div>
          );
        })}
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
