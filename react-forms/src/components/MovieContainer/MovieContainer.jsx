import MovieCards from "../MovieCards/MovieCards";

export default function MovieContainer({ movies }) {
  const movieList = Array.isArray(movies) ? movies : [movies];

  return (
    <>
      <div className="movie-grid">
        {movieList.map((movie, index) => (
          <MovieCards key={index} movie={movie} />
        ))}
      </div>
    </>
  );
}

// import MovieCards from "../MovieCards/MovieCards";

// export default function MovieContainer({ movies }) {
//   return (
//     <div>
//       {movies.map((movie) => (
//         <MovieCards key={movie.imdbID} movie={movie} />
//       ))}
//     </div>
//   );
// }

// import MovieCards from "../MovieCards/MovieCards";

// export default function MovieContainer({ movies }) {
//   return (
//     <>
//       <div>
//         <MovieCards movies={movies} />
//       </div>
//     </>
//   );
// }
