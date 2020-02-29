import React from 'react';

//import { myfunction, myotherfunction } from './mondossier'
function Header() {
    // const content = "Salut, je suis le Header"; {content}
    return (
        <header class="main-header">
            <nav class="navbar navbar-expand-sm bg-black navbar-dark">
                <img src="assets/image/spotify.png" class="d-inline-block navbar-brand logo" alt="Logo Spotify"></img>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse offset-md-2 offset-lg-2 offset-xl-7" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item"><a class="nav-link" href="/Home">Accueil</a></li>
                        <li class="nav-item"><a class="nav-link" href="/Prenium">Prenium</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/Search" id="navbardrop" data-toggle="dropdown">Recherche</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="/Artist">Artiste</a>
                                <a class="dropdown-item" href="/Gender">Genre</a>
                                <a class="dropdown-item" href="/Album">Album</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header