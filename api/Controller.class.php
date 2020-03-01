<?php

class Controller
{
    private $response = [];
    public function __construct()
    {
        $this->response = ['success' => false, 'data' => "404"];
    }
    /**
     * http://localhost:8080/album
     * The flag will specify if we are getting the albums by genre, by artist, or by itself
     */
    public function getAlbums($flag = "all", $limit = null)
    {
        $model = new Model;
        if (!empty($_GET)) {
            // We are searching by name
            $albums = $model->getAlbum($_GET["name"]);
        } else {
            $albums = $model->getAllAlbums($limit);
        }

        if (is_array($albums)) {
            $this->response = ['success' => true, 'data' => $albums];
        }
        $this->returnJson($this->response);
    }

    public function getAlbumsGenre($id = "", $limit = null)
    {
        if (!empty($_GET)) {
            $id = $_GET["id"];
        }
        $model = new Model;
        $albums = $model->getAlbumsByGenre($id);
        if (is_array($albums)) {
            $this->response = ['success' => true, 'data' => $albums];
        }
        $this->returnJson($this->response);
    }
    public function getTracks()
    {
        if (empty($_GET)) {
            $this->returnJson($this->response);
        }
        $model = new Model;
        $tracks = $model->getTracksByAlbum($_GET["albumId"]);
        if (is_array($tracks)) {
            $this->response = ['success' => true, 'data' => $tracks];
        }
        $this->returnJson($this->response);
    }
    public function getArtists(string $name)
    {
        $model = new Model;
        $artists = $model->getArtists($name, 5);
        if (is_array($artists)) {
            // We want to get also his albums
            // foreach ($artists as $key => $artist) {
            //     $artistId = $artist["id"]; // we want to get his id because we are going to use it in order to get his albums
            //     $artists[$key]["albums"] = $model->getAlbumsByArtist($artistId); // at the key "albums" we put all the artist albums
            // }
            $this->response = ['success' => true, 'data' => $artists];
        }
        $this->returnJson($this->response);
    }
    public function getGenres($genre)
    {
        if (!empty($_GET)) {
            $genre = $_GET['name'];
        }
        $model = new Model;
        $genre = $model->getGenres($genre);
        if (is_array($genre)) {
            $this->response = ['success' => true, 'data' => $genre];
        }
        $this->returnJson($this->response);
    }

    public function notFound()
    {
        $this->returnJson($this->response);
    }

    public function getFull()
    {
        $model = new Model;
        $artists = $model->getAllArtists();
        if (is_array($artists)) {
            // We want to get also his albums
            foreach ($artists as $key => $artist) {
                $artistId = $artist["id"]; // we want to get his id because we are going to use it in order to get his albums
                $artists[$key]["albums"] = $model->getAlbumsByArtist($artistId); // at the key "albums" we put all the artist albums
                //we also want to take all tracks from each album
                foreach ($artists[$key]["albums"] as $k => $album) {
                    $albumId = $album["id"];
                    $artists[$key]["albums"][$key]["tracks"] = $model->getTracksByAlbum($albumId);
                }
            }
            $this->response = ['success' => true, 'data' => $artists];
        }

        $this->returnJson($this->response);
    }



    private function returnJson(array $array)
    {
        echo json_encode($array);
    }
}
