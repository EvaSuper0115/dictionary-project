import React from "react";
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
          const audioRef = React.createRef();

          function playAudio() {
            audioRef.current.play();
          }
          return (
            <div key={index} className="phonetic">
              {" "}
              {phonetics.text}
              {phonetics.audio.trim().length > 0 && (
                <span onClick={playAudio} title="listen">
                  <i className="fa-solid fa-volume-high"></i>
                  <audio ref={audioRef} src={phonetics.audio}></audio>
                </span>
              )}
            </div>
          );
        })}
      {props.results.word.length > 0 && <Photos images={props.photos} />}

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
