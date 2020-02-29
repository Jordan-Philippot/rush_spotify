<?php

class Model extends DatabaseConn
{
    private $db = null;
    public function __construct()
    {
        $this->db = $this->connect();
    }
    //All our requests to the database
    public function getAllAlbums($limit = null)
    {
        $sql = "SELECT *, albums.name album_name
        FROM albums";
        if ($limit !== null) {
            $sql .= " limit :lim"; // If we only want to get a certain amount of albums
        }
        $statement = $this->db->prepare($sql);
        $statement->bindParam(":lim", $limit, PDO::PARAM_INT);
        $statement->execute();
        return $statement->fetchAll();
    }
    public function getAlbum(string $name, $limit = null)
    {
        $sql = "SELECT *, albums.name album_name,
        FROM albums
        -- left join tracks on albums.id = tracks.album_id
        where albums.name like '%:name%'";
        if ($limit !== null) {
            $sql .= " limit :lim"; // If we only want to get a certain amount of albums
        }
        $statement = $this->db->prepare($sql);
        $statement->bindParam(':name', $name);
        $statement->bindParam(':lim', $limit, PDO::PARAM_INT);
        $statement->execute();
        return $statement->fetchAll();
    }
    public function getArtist(string $name)
    {
        $sql = "SELECT *, albums.name album_name, albums.id album_id from artists
        INNER join albums on artists.id = albums.artist_id
        where artists.name like '%:name%'";
        $statement = $this->db->prepare($sql);
        $statement->bindParam(':name', $name);
        $statement->execute();
        return $statement->fetchAll();
    }
}
