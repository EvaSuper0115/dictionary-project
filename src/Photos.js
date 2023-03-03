import React from "react";

export default function Photos(props) {
  return (
    <div className="card">
      <img
        className="photos-adjustments card-img"
        src={props.images.photos[0].src.landscape}
        alt={props.images.photos[0].alt}
      ></img>
      <div className="card-img-overlay">
        <a
          href={props.images.photos[0].photographer_url}
          target="_blank"
          rel="noreferrer"
          title={`${props.images.photos[0].photographer}'s Page`}
        >
          {" "}
          <p className="card-text">
            Photo by : {props.images.photos[0].photographer}
          </p>
        </a>
      </div>
    </div>
  );
}
