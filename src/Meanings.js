import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div className=" widget">
        <div className="partOfSpeech"> .{props.meaning.partOfSpeech}.</div>
        {props.meaning.definitions
          .slice(0, 7)
          .map(function (definition, index) {
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

      <div className="overflow-x-auto">
        {props.meaning.synonyms.map(function (synonyms, index) {
          return (
            <a
              href={`https://www.google.com/search?q=${synonyms}`}
              target="_blank"
              rel="noopener"
            >
              <span className="small-widget synonyms" key={index}>
                {" "}
                {synonyms}
              </span>
            </a>
          );
        })}
      </div>

      <div className="overflow-x-auto">
        {props.meaning.antonyms.map(function (antonyms, index) {
          return (
            <a
              href={`https://www.google.com/search?q=${antonyms}`}
              target="_blank"
              rel="noopener"
            >
              <span className="dark-small-widget antonyms" key={index}>
                {" "}
                {antonyms}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
