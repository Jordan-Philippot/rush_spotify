<?php

class DatabaseConn
{
    private $host = "localhost";
    private $user = "root";
    private $password = "root";
    private $dbName = "database_music";


    protected function connect()
    {
        $dsn = "mysql:host=" . $this->host . ";dbname=" . $this->dbName;
        try {
            $pdo = new PDO($dsn, $this->user, $this->password);
            $pdo->setAttribute(PDO::ERRMODE_EXCEPTION, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
        }
        return $pdo;
    }
}
