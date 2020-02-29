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
                $controller->getAlbums();
                break;
            case '/tracks':
                $controller->getTracks(1);
                break;
            case '/artists':
                $controller->getArtists("a");
                break;
            default:
                $controller->notFound();
                break;
        }
    }
}
