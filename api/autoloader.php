<?php

/**
 * Autoload created by Bizimana Zacharie :
 *                     zach@artkodes.com
 */
spl_autoload_register("myAutoLoader");

function myAutoLoader(string $className)
{
    $path = "./";
    $extension = ".class.php";
    $fullpath = $path . $className . $extension;
    if (!file_exists($fullpath)) {
        return false; // If the file doesn't exist we wont include it
    }
    require_once $fullpath;
}
