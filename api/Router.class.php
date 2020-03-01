<?php

class Router
{
    public function route($uri)
    {
        $controller = new Controller;
        switch ($uri) {
            case '/home':
                echo "Home";
                break;
            case '/albums':
                $controller->getAlbums("none", 15);
                break;
            case (preg_match('/tracks.*/', $uri) ? true : false):
                $controller->getTracks();
                break;
            case '/artists':
                $controller->getArtists("b");
                break;
            case '/full':
                $controller->getFull(15);
            case '/genders':
                $controller->getGenres("");
                break;
            case (preg_match('/albumbygenre.*/', $uri) ? true : false):
                $controller->getAlbumsGenre("");
                break;
            default:
                $controller->notFound();
                break;
        }
    }
}
