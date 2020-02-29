<?php

/**
 *  SPOTIFY API
 */

//This will allow our React application at http://address:port
// to comunicate with our api that is not on the same port
header("Access-Control-Allow-Origin: http://localhost:3000");
require_once("./autoloader.php");
