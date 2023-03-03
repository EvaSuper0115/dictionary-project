import React from "react";
import Meanings from "./Meanings.js";
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

      <div className="card text-white">
        <img
          className="photos-adjustments card-img"
          src={props.photos.photos[0].src.landscape}
          alt={props.photos.photos[0].alt}
        ></img>
        <div className="card-img-overlay">
          <a
            href={props.photos.photos[0].photographer_url}
            target="_blank"
            rel="noreferrer"
            title={`${props.photos.photos[0].photographer}'s Page`}
          >
            {" "}
            <p className="card-text">
              Photo by : {props.photos.photos[0].photographer}
            </p>
          </a>
        </div>
      </div>

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
