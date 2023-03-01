import React from "react";

export default function Results(props) {
  let word = props.results.word;

  return (
    <div className="Results">
      <div className="word"> {word}</div>
    </div>
  );
}
