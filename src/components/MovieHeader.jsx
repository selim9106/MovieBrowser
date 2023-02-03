import MovieHeaderCard from "./MovieHeaderCard"

const MovieHeader = ({movies}) => {
  return (
    <swiper-container
      slides-per-view="1"
      id="movieHeaderCarousel"
      className="">
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
    </swiper-container>
  );
}
export default MovieHeader