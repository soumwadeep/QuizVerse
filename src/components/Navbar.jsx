import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/Home">
            QuizVerse
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" to="/Home">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/About">
                About
              </NavLink>
              <NavLink className="nav-link" to="/Features">
                Features
              </NavLink>
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
              <NavLink className="nav-link" to="/SignUp">
                Sign Up
              </NavLink>
              <NavLink className="nav-link" to="/SignIn">
                Sign In
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
