import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <ul className="p-2 row g-md-3">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          poster={movie.poster}
          title={movie.title}
          year={movie.releaseYear}
          description={movie.description}
        />
      ))}
    </ul>
  );
};
export default MovieList;
