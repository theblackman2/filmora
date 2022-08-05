import React from "react";
import "./Movie.css";

function Movie({ img, title, type, year }) {
  return (
    <div className="movie">
      <span className="enter"></span>
      <div className="movie-image">
        <img src={img} alt={title} />
      </div>
      <div className="movie-infos">
        <h2 className="movie-infos__title">{title}</h2>
        <div className="supl-infos">
          <p className="movie-type">{type}</p>
          <p className="movie-year">{year}</p>
        </div>
      </div>
    </div>
  );
}

export default Movie;
