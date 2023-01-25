const MovieCard = ({title, description, year, movieposter}) => {
  return (
    <li className="card d-flex m-2 bg-body col-8 col-md-4">
      <div>
        <img className="card-img-top" src={movieposter} alt=""></img>
      </div>
      <article className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p>{year}</p>
      </article>
    </li>
  );
}
export default MovieCard