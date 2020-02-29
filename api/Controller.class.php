<?php

class Controller
{
    private $response = [];
    public function __construct()
    {
        $this->response = ['success' => false, 'data' => "404"];
    }
    public function getAlbums()
    {
        $model = new Model;
        $albums = $model->getAllAlbums();
        if (is_array($albums)) {
            $this->response = ['success' => true, 'data' => $albums];
        }
        $this->returnJson($this->response);
    }
    public function notFound()
    {
        $this->returnJson($this->response);
    }



    private function returnJson(array $array)
    {
        echo json_encode($array);
    }
}
