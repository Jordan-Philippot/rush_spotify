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
            case '/full':
                $controller->getFull(15);
                break;
            default:
                $controller->notFound();
                break;
        }
    }
}
