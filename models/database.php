<?php

class Database {

    public static function getPdo()
    {

        try 
        {
            $bdd = new PDO('mysql:host=localhost;dbname=tdl;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
        }
        catch (Exception $e)
        {
            die('Erreur : ' . $e->getMessage());
        }


        return $bdd;

    }
}