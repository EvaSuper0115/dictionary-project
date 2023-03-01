import React from "react";

export default function Meanings(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <div className=" widget">
        <div className="partOfSpeech"> {props.meaning.partOfSpeech}</div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div className="group-content" key={index}>
              <div className="meaning-content-text">
                {definition.definition}
              </div>
              <div className="meaning-content-text example-sentence">
                {definition.example}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <small>Synonyms (if any):</small>
      </div>
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
