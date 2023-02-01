import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    
      <ul className="p-2 row gx-8">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            movieposter={movie.poster_path}
            title={movie.title}
            year={movie.release_date}
            description={movie.overview}
          />
        ))}
      </ul>
    
  );
};
export default MovieList;
