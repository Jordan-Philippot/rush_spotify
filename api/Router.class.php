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
                $controller->getArtists("a");
                break;
<<<<<<< HEAD
            case '/full':
                $controller->getFull(15);
=======
            case '/genres':
                $controller->getGenres("");
>>>>>>> mattbranch
                break;
            default:
                $controller->notFound();
                break;
        }
    }
}
