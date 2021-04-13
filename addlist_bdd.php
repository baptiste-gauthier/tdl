<?php

session_start() ; 
// echo $_GET['list'] ; 

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$requete = $bdd->prepare("UPDATE taches
                            SET description = :des_task 
                                WHERE utilisateur_fk = 6
"); 

$requete->bindParam(':des_task', trim($_GET['list'])); 
// $requete->bindParam(':login', $_SESSION['login']); 

if($requete->execute())
echo 'yes' ; 