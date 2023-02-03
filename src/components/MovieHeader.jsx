import MovieHeaderCard from "./MovieHeaderCard"

const MovieHeader = ({movies}) => {
  return (
    <ul
      id="movieHeaderCarousel"
      className="carousel-inner"
      data-bs-ride="carousel">
      {movies.map((movie) => (
        <MovieHeaderCard
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
}
export default MovieHeader