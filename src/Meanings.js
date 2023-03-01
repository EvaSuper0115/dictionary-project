import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <div className="partOfSpeech widget">{props.meaning.partOfSpeech}</div>
      <div className="overflow-x-auto">
        {props.meaning.synonyms.map(function (synonyms, index) {
          return (
            <span className="small-widget synonyms" key={index}>
              {synonyms}
            </span>
          );
        })}
      </div>
    </div>
  );
}
