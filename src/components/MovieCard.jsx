const MovieCard = ({id, title, description, year, movieposter}) => {
  return (
    // <li id={ id } key={ id } className="card bg-body g-0 col-12 col-sm-4 col-lg-3">
    <swiper-slide>
      {/* <div className="img-container justify-content-start m3"> */}
        <div>
        <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500/" + movieposter} alt=""></img>
      </div>
      {/* <article className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p>{year}</p>
        <button>+</button>
      </article> */}
      {/* </li> */ }
      </swiper-slide>
  );
}
export default MovieCard