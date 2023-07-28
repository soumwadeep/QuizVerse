import { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "./images/icon.webp";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  function toggleNav() {
    setNavOpen((state) => !state);
  }

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg text-center">
        <div className="container-fluid">
          <h5>
            <NavLink className="navbar-brand" to="/Home">
              <img src={icon} className="logo" alt="Logo" />
              &nbsp;<b>QuizVerse</b>
            </NavLink>
          </h5>
          <button
            onClick={toggleNav}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            Menu
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="navbarOffcanvasNavbarLabel"
            data-bs-dismiss={navOpen ? "offcanvas" : "none"}
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={icon} className="logo" alt="Logo" />
                &nbsp;<b>QuizVerse</b>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" id="main-bar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <h5>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "menu_active" : "nav-link"
                      }
                      to="/Home"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        toggleNav();
                      }}
                    >
                      Home
                    </NavLink>
                  </h5>
                </li>

                <li className="nav-item">
                  <h5>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "menu_active" : "nav-link"
                      }
                      to="/About"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        toggleNav();
                      }}
                    >
                      About
                    </NavLink>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "menu_active" : "nav-link"
                      }
                      to="/Features"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        toggleNav();
                      }}
                    >
                      Features
                    </NavLink>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "menu_active" : "nav-link"
                      }
                      to="/Contact"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        toggleNav();
                      }}
                    >
                      Contact
                    </NavLink>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "menu_active" : "nav-link"
                      }
                      to="/SignIn"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        toggleNav();
                      }}
                    >
                      Sign In
                    </NavLink>
                  </h5>
                </li>
                <li className="nav-item">
                  <h5>
                    <NavLink
                      className={(navData) =>
                        navData.isActive ? "menu_active" : "nav-link"
                      }
                      to="/SignUp"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                        toggleNav();
                      }}
                    >
                      Sign Up
                    </NavLink>
                  </h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
