<?php

session_start() ; 

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$requete = $bdd->prepare("SELECT finish_tasks
                            FROM taches
                                WHERE utilisateur_fk = :id_fk
"); 

$requete->bindParam(':id_fk', $_SESSION['id']); 

$requete->execute(); 

$result = $requete->fetch(PDO::FETCH_ASSOC); 

$json = json_encode($result) ; 

echo $json ; 