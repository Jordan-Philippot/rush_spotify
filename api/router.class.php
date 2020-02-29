<?php

class Router
{
    public function route($uri)
    {
        switch ($uri) {
            case '404':
                echo "404";
                break;

            default:
                echo "HOME";
                break;
        }
    }
}
