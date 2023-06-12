import React from "react";

export default function Photos(props) {
  return (
    <div className="photo-grid">
      {props.images.photos.map((photo, index) => {
        return (
          <a
            key={index}
            href={photo.url}
            title="see original"
            target="_blank"
            rel="noreferrer"
          >
            <div className="card photos-adjustments">
              <img
                className="card-img"
                src={photo.src.landscape}
                alt={photo.alt}
                loading="lazy"
              ></img>

              <div className="card-img-overlay">
                {" "}
                <p className="card-text">Photo by : {photo.photographer}</p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
