import React from "react";

export default function Photos(props) {
  return (
    <div className="photo-grid">
      {props.images.photos.map((photo, index) => {
        return (
          <div key={index} className="card photos-adjustments">
            <img
              className="card-img"
              src={photo.src.landscape}
              alt={photo.alt}
            ></img>

            <div className="card-img-overlay">
              <a
                href={photo.photographer_url}
                target="_blank"
                rel="noreferrer"
                title={`${photo.photographer}'s Page`}
              >
                {" "}
                <p className="card-text">Photo by : {photo.photographer}</p>
              </a>
              <a
                href={photo.url}
                title="original"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <p className="card-text">See original</p>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
