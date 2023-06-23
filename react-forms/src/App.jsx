import { useEffect, useState } from "react";
import MovieContainer from "./components/MovieContainer/MovieContainer";
import "./App.css";
function App() {
  const [formData, setFormData] = useState({
    search: "",
  });
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieIds = [1630029, 11138512, 11032374];
      const moviePromises = [];

      for (const movieId of movieIds) {
        const getMovie = fetch(
          `http://www.omdbapi.com/?apikey=67b30870&i=tt${movieId}`
        ).then((response) => response.json());

        moviePromises.push(getMovie);
      }

      const movies = await Promise.all(moviePromises);
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  const searchMovies = async () => {
    const apiKey = "67b30870";
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${formData.search}`
    );
    const jsonMovies = await response.json();
    setMovies(jsonMovies.Search);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchMovies();
  };

  return (
    <>
      <h1>SEARCH FOR MOVIES</h1>
      <form className="form-container" onSubmit={handleFormSubmit}>
        <input
          className="form-input"
          type="text"
          name="search"
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData?.search}
        />
        <input className="submit-button" type="submit" value="Submit" />
      </form>
      <MovieContainer movies={movies} />
    </>
  );
}
export default App;
