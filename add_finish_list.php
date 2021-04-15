<?php

session_start() ; 
$get = trim($_GET['list']); 

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$requete = $bdd->prepare("SELECT finish_tasks
                            FROM taches
                                WHERE utilisateur_fk = :id_user
") ; 

$requete->bindParam(':id_user' , $_SESSION['id']) ;

$requete->execute(); 

$result = $requete->fetch() ;

// var_dump($result) ; 


$requete = $bdd->prepare("UPDATE taches
                            SET finish_tasks = :finish_task 
                                WHERE utilisateur_fk = :id_user
"); 

$requete->bindParam(':finish_task', $get); 
$requete->bindParam(':id_user', $_SESSION['id']); 

if($requete->execute())
echo 'yes' ; 

