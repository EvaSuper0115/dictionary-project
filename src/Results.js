import React from "react";
import Audio from "./Audio.js";
import Meanings from "./Meanings.js";

import Photos from "./Photos.js";
export default function Results(props) {
  return (
    <div className="Results">
      <span className="word gradient-text"> {props.results.word}</span>
      <span>
        <a
          href={props.results.sourceUrls}
          title={`see "${props.results.word}" on wiktionary`}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-solid fa-circle-info font-icon"></i>
        </a>
      </span>
      {props.results.phonetics.length > 0 &&
        props.results.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Audio audio={phonetics} />{" "}
            </div>
          );
        })}
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <Meanings meaning={meaning} />
          </div>
        );
      })}{" "}
      {props.results.word && props.results.word.length > 0 && props.photos && (
        <Photos images={props.photos} />
      )}
    </div>
  );
}
