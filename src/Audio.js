import React from "react";

export default function Audio(props) {
  const audioRef = React.createRef();

  function playAudio() {
    audioRef.current.play();
  }

  return (
    <div className="phonetic">
      {" "}
      {props.audio.text}
      {props.audio.audio.trim().length > 0 && (
        <span onClick={playAudio} title="listen">
          <i className="fa-solid fa-volume-high"></i>
          <audio ref={audioRef} src={props.audio.audio}></audio>
        </span>
      )}
    </div>
  );
}
