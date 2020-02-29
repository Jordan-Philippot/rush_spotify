<?php

class Controller
{
    private $response = [];
    public function __construct()
    {
        $this->response = ['success' => false, 'data' => "404"];
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
