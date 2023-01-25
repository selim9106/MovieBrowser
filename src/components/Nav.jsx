const Nav = () => {
    return (
      <nav className="navbar navbar-expand-lg text-light">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Menu
          </a>
          <button
            className="navbar-toggler bg-secondary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Nav