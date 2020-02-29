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

            default:
                $controller->notFound();
                break;
        }
    }
}
