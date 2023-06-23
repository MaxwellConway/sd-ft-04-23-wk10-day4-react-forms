export default function MovieCards({ movie }) {
  console.log(movie);
  return (
    <div>
      <img src={movie?.Poster} alt="" />
      <h1>{movie?.Title}</h1>
    </div>
  );
}
