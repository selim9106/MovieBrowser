import Nav from "../components/Nav";
import MovieList from "../components/MovieList";

function App() {
  const fakeMovies = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      description: "A creepy thriller  you'll never forget",
      releaseYear: 1994,
    },
    {
      id: 2,
      title: "The Little Mermaid",
      description: "A classical Disney fairytale",
      releaseYear: 1993,
    },
  ];
  return (
    <div className="bg-dark text-light">
      <div className="container py-4 px-3 mx-auto">
        <Nav />
        <h1>
          <span className="text-danger">Movie</span>Browser
        </h1>
        {/* <button className="btn btn-primary">button</button> */}
        <section className="container-fluid">
          <MovieList movies={fakeMovies} />
        </section>
      </div>
    </div>
  );
}

export default App;
