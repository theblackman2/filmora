import "./Show.css";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";

function Show() {
  const { id, name } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `https://www.omdbapi.com/?i=${id}&apikey=da675bd2&`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setMovie(data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <Navbar value={name} />
      <div className="show-container">
        {loading ? (
          <div className="loading">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : movie.Response === "False" ? (
          <div className="not-found">Movie not found, try something else</div>
        ) : (
          <div className="infos">
            <div className="img">
              <img src={movie.Poster} alt="" />
            </div>
            <h1 className="title">{movie.Title}</h1>
            <p>Country: {movie.Country}</p>
            <p>Type: {movie.Type}</p>
            <p>Year: {movie.Year}</p>
            <p>Genre: {movie.Genre}</p>
            <p>Language: {movie.Language}</p>
            <p>Time: {movie.Runtime}</p>
            <p>Actors: {movie.Actors}</p>
            <p>Writer: {movie.Writer}</p>
            <p>Director: {movie.Director}</p>
            <p>Awards: {movie.Awards}</p>
            <p>Plot: {movie.Plot}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Show;
