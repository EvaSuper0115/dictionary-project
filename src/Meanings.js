import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <div className=" widget">
        <div className="partOfSpeech"> {props.meaning.partOfSpeech}</div>
        <div className="meaning-content-text">
          {props.meaning.definitions[0].definition}
        </div>
        <div className="meaning-content-text example-sentence">
          {props.meaning.definitions[0].example}
        </div>
      </div>

      <div>Similar :</div>
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
