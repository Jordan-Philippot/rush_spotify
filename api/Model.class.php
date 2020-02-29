<?php

class Model extends DatabaseConn
{
    private $db = null;
    public function __construct()
    {
        $this->db = $this->connect();
    }
    //All our requests to the database
    public function getAllAlbums()
    {
        $sql = "SELECT * FROM albums
        left join tracks on albums.id = tracks.album_id";
        $statement = $this->db->prepare($sql);
        $statement->execute();
        return $statement->fetchAll();
    }
}
