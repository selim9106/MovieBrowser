import Nav from '../components/Nav';

function App() {

  return (
    <div className="bg-dark text-light">
      <div className="container py-4 px-3 mx-auto">
        <Nav />
        <h1>
          <span className="text-danger">Movie</span>Browser
        </h1>
        <button className="btn btn-primary">button</button>
      </div>
    </div>
  );
}

export default App
