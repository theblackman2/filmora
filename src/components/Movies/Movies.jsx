import "./Movies.css";
import React from "react";
import { useParams, Link } from "react-router-dom";
import Movie from "./../Movie/Movie";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Navbar from "../Navbar/Navbar";

function Movies() {
  const name = useParams().name;
  const [allMovies, setAllMovies] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const url = `https://www.omdbapi.com/?s=${name}&apikey=da675bd2&`;
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllMovies(data.Search))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [name]);

  const movies =
    allMovies !== undefined
      ? allMovies.map((movie) => {
          const { Poster, Title, Type, Year, imdbID } = movie;
          return (
            <Link key={imdbID} to={`/movies/${name}/${movie.imdbID}`}>
              <Movie img={Poster} title={Title} type={Type} year={Year} />
            </Link>
          );
        })
      : [];

  return (
    <div className="movies">
      <Navbar value={name} />
      <main className="all-movies">
        {loading ? (
          <Loader />
        ) : !error ? (
          <div className="movies-container">
            {movies.length === 0 ? <div className="not-found">Nothing found, try something else</div> : movies}
          </div>
        ) : (
          <Error />
        )}
      </main>
    </div>
  );
}

export default Movies;
