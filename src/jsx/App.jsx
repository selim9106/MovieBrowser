import { useEffect, useState, useCallback } from "react";
import Nav from "../components/Nav";
import MovieList from "../components/MovieList";

// const movie_discover_url =
//   "https://api.themoviedb.org/3/discover/movie?api_key=";
// const api_key = process.env.TMDB_API_KEY;

function App() {
  // console.log(api_key);
  // const fakeMovies = [
  //   {
  //     id: 1,
  //     title: "The Shawshank Redemption",
  //     description: "A creepy thriller  you'll never forget",
  //     releaseYear: 1994,
  //   },
  //   {
  //     id: 2,
  //     title: "The Little Mermaid",
  //     description: "A classical Disney fairytale",
  //     releaseYear: 1993,
  //   },
  // ];
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=c3c1cbc245625bbb11860806be6106ea"
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      const popularMoviesData = data.results.map((popularmovie) => {
        return {
          id: popularmovie.id,
          title: popularmovie.title,
          description: popularmovie.overview,
          releaseYear: popularmovie.release_date,
        };
      });
      setPopularMovies(data.results);
      
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false);
      
  }, []);
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Content value (depends on errors, data array length, loading state,...);
  let content = <p>No Movies found</p>;
  error && (content = <p>{error}</p>);
  (popularMovies.length > 0) && (content = <MovieList movies={ popularMovies } />);
  isLoading && (content = <p>Loading...</p>);


  return (
    <div className="bg-dark text-light">
      <div className="container py-4  mx-auto ">
        <Nav />
        <h1>
          <span className="text-danger">Movie</span>Browser
        </h1>
        <button onClick={fetchMovies} className="btn btn-primary">
          button
        </button>
        <section className="container-fluid">
          {content}
          {/* { !isLoading && popularMovies.length > 0 && <MovieList movies={ popularMovies } /> }
          { !isLoading && popularMovies.length === 0 && !error &&  }
          { !isLoading && error && <p>{ error }</p> }
          {isLoading && <p>Loading...</p>} */}
        </section>
      </div>
    </div>
  );
}

export default App;
