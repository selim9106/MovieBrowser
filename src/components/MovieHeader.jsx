import MovieHeaderCard from "./MovieHeaderCard"

const MovieHeader = ({ movies }) => {

    
    return (
        <swiper-container
            id="movieHeaderCarousel"
            className=""
            init="true"
            loop="true"
            effect="fade"
            slides-per-view="1"
            autoplay-delay="5000"
            autoplay-disable-on-interaction="true"
        >
            { movies.map((movie) => (
                <MovieHeaderCard
                    key={ movie.id }
                    id={ movie.id }
                    movieposter={ movie.poster_path }
                    title={ movie.title }
                    year={ movie.release_date }
                    description={ movie.overview }
                />
            )) }
        </swiper-container>
    );
}

export default MovieHeader

// const headerSwiper = document.querySelector("#movieHeaderCarousel");
// const headerSwiperParams = {
//   slidesPerView: 1,
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   on: {
//     init() {},
//   },
// };

// Object.assign(headerSwiper, headerSwiperParams);
// headerSwiper.initialize();