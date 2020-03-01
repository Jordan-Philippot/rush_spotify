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
            case '/tracks':
                $controller->getTracks(1);
                break;
            case '/artists':
                $controller->getArtists("b");
                break;
            case '/full':
                $controller->getFull(15);
            case '/genres':
                $controller->getGenres("");
                break;
            default:
                $controller->notFound();
                break;
        }
    }
}
