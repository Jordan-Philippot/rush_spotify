import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/spotify.png";
function Header() {
  // const content = "Salut, je suis le Header"; {content}
  return (
    <header className="main-header">
      <nav className="navbar navbar-expand-sm bg-black navbar-dark">
        <img
          src={Logo}
          className="d-inline-block navbar-brand logo"
          alt="Logo Spotify"
        ></img>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse offset-md-2 offset-lg-2 offset-xl-7"
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                {" "}
                Accueil{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/premium">
                {" "}
                Premium{" "}
              </Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/search"
                id="navbardrop"
                data-toggle="dropdown"
              >
                {" "}
                Recherche
              </Link>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="/search/artist">
                  {" "}
                  Artiste{" "}
                </Link>
                <Link className="dropdown-item" to="/search/gender">
                  {" "}
                  Genre{" "}
                </Link>
                <Link className="dropdown-item" to="/search/album">
                  {" "}
                  Album{" "}
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
