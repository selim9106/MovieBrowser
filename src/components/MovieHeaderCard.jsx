const MovieHeaderCard = ({id, title, description, year, movieposter}) => {
  return (
    <li id={id} key={id} className="carousel-item active">
      <div className="w-100 d-block">
        <img
          className="w-100 mh-20"
          src={"https://image.tmdb.org/t/p/w500/" + movieposter}
          alt=""></img>
      </div>
      <article className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p>{year}</p>
        <button type="button">
          <i className="bi bi-play-fill"></i> Read
        </button>
        <button type="button">
          <i className="bi bi-plus-circle"></i>
          &nbsp;MORE
        </button>
      </article>
    </li>
  );
}
export default MovieHeaderCard