import { useState, useEffect } from "react";
import Swiper from "swiper";
import MovieHeaderCard from "./MovieHeaderCard"

const MovieHeader = ({ movies }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // const handleSlideChange = (swiper) => {
    //   setCurrentIndex(swiper.activeIndex);
    // };
    

    useEffect(() => {
      const swiper = new Swiper("#movieHeaderCarousel", {
        on: {
          slideChange: function () {
            setCurrentIndex(this.activeIndex);
          },
        },
      });

      return () => {
        swiper.destroy();
      };
    }, []);

  return (
    <swiper-container
      id="movieHeaderCarousel"
      className=""
      //   init="false"
      loop="true"
      effect="fade"
      slides-per-view="1"
      autoplay-delay="5000"
      autoplay-disable-on-interaction="true"
        // onSlideChange={ handleSlideChange }
    >
      {movies.map((movie, index) => (
        <MovieHeaderCard
          key={movie.id}
          id={movie.id}
          movieposter={movie.poster_path}
          title={movie.title}
          year={movie.release_date}
          description={movie.overview}
          currentIndex={currentIndex}
          index={index}
        />
      ))}
    </swiper-container>
  );
}
export default MovieHeader