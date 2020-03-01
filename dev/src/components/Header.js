import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/spotify.png";
function Header() {
    // const content = "Salut, je suis le Header"; {content}
    return (
        <header class="main-header">
            <nav class="navbar navbar-expand-sm bg-black navbar-dark">
                <img
                    src={Logo} class="d-inline-block navbar-brand logo" alt="Logo Spotify" ></img>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div
                    class="collapse navbar-collapse offset-md-2 offset-lg-2 offset-xl-7"
                    id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link" to="/"> Home </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/genders"> Genre </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/artists"> Artiste </Link>
                        </li>

                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="/" id="navbardrop" data-toggle="dropdown"> Recherche</Link>
                            <div class="dropdown-menu">
                                <Link class="dropdown-item" to="/artists"> Artiste </Link>
                                <Link class="dropdown-item" to="/genders"> Genre </Link>
                                <Link class="dropdown-item" to="/"> Album </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
