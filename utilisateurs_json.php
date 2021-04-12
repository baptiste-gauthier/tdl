<?php

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$requete = $bdd->prepare("SELECT *
                                FROM utilisateurs
");

$requete->execute(); 

$result = $requete->fetchAll(PDO::FETCH_ASSOC) ; 

$json = json_encode($result) ; 

echo $json ; 