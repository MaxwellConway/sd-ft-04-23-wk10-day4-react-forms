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
      const randomNum = Math.floor(Math.random() * 9000000) + 1000000;

      const getMovies = await fetch(
        `http://www.omdbapi.com/?apikey=67b30870&i=tt${randomNum}`
      );

      const jsonMovies = await getMovies.json();
      setMovies(jsonMovies);
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
