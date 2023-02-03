import "./MovieHeaderCard.css";

const MovieHeaderCard = ({ id, title, description, year, movieposter }) => {
  return (
    <swiper-slide id={id} key={id} className="w-100 position-relative">
          <div className="img-gradient">
    
        <img
          className="d-block w100 h-20"
          src={"https://image.tmdb.org/t/p/w500/" + movieposter}
                      alt=""></img>
    </div>
      <article className="z-3 position-absolute top-50 start-50">
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
    </swiper-slide>
  );
}
export default MovieHeaderCard