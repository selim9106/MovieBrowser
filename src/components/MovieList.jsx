
import { useRef, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  const swiperElRef = useRef(null);
  
  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      // console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
    });
  }, []);

  // const swiperPopularCtnr = document.getElementById("swiper-container-popular");
  // const swiperPopularParams = {
  //   slidesPerView: 1,
  //   breakpoints: {
  //     640: {
  //       slidesPerView: 2,
  //     },
  //     1024: {
  //       slidesPerView: 3,
  //     },
  //   },
  //   on: {
  //     init() {
  //       // ...
  //     },
  //   },
  // };

  // Object.assign(swiperPopularCtnr, swiperPopularParams);
  // swiperPopularCtnr.initialize();


  return (
    // <ul className="p-2 row gx-8">
    <swiper-container
      id="swiper-container-popular"
      ref={swiperElRef}
      // init="false"
      slides-per-view="3"
      speed="500"
      navigation="true"
      loop="true"
      css-mode="true"
      grid-rows="1"
      autoHeight="true"
      mousewheel-force-to-axis="true">
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
    </swiper-container>
    // </ul>
  );
};
export default MovieList;
