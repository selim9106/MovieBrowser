// import { useEffect } from "react";
import "./MovieHeaderCard.css";

const MovieHeaderCard = ({ id, title, description, year, movieposter, currentIndex, index }) => {
    // useEffect(() => {
    //   console.log("currentIndex changed", currentIndex);
    // }, [currentIndex]);
    // console.log(currentIndex, index);
  return (
    <swiper-slide
      id={id}
      key={id}
      className="w-100 position-relative bg-primary">
      <div className="img-gradient">
        <img
                  className="d-block w100 h-20"
                  src={ "https://image.tmdb.org/t/p/w500/" + movieposter }
                  alt={ title }></img>
      </div>
      {currentIndex === index && (
        <article className="z-3 position-absolute top-30 start-50 me-4 px-4">
          <h3 className="">{title}</h3>
          <p className="">{description}</p>
          <p>{year}</p>
          <button type="button">
            <i className="bi bi-play-fill"></i> Read
          </button>
          <button type="button">
            <i className="bi bi-plus-circle"></i>
            &nbsp;MORE
          </button>
        </article>
      )}
    </swiper-slide>
  );
}
export default MovieHeaderCard