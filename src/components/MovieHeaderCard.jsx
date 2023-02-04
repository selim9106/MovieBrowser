import "./MovieHeaderCard.css";

const MovieHeaderCard = ({ id, title, description, year, movieposter }) => {
  
  return (
    <swiper-slide id={id} key={id} className="w-100 position-relative">
      <div className="img-gradient">
        <img
            className="d-block w100 h-20 ps-4"
            src={"https://image.tmdb.org/t/p/w500/" + movieposter}
                  alt={ title }></img>
              
        {/* <div
            className="d-block w100 h-20 ps-3"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/w500/" + ${movieposter})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            zIndex:100
          }}></div> */}
      </div>
      {
        //   <article className="z-2 position-absolute top-30 start-50 me-4 px-4 h-100">
        <article className="z-2 position-absolute top-0 start-40 pt-10 me-8 px-4 py-12 h-100 bg-black">
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
      }
    </swiper-slide>
  );
}
export default MovieHeaderCard