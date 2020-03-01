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
                                Home{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/genders">
                                {" "}
                                Genre{" "}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/artists">
                                {" "}
                                Artiste{" "}
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="/"
                                id="navbardrop"
                                data-toggle="dropdown"
                            >
                                {" "}
                                Recherche
              </Link>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" to="/search/artists">
                                    {" "}
                                    Artiste{" "}
                                </Link>
                                <Link className="dropdown-item" to="/search/genders">
                                    {" "}
                                    Genre{" "}
                                </Link>
                                <Link className="dropdown-item" to="/search/albums">
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
