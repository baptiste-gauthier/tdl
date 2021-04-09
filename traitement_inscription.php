<?php

$login = htmlspecialchars($_POST['login']); 
$pass = htmlspecialchars($_POST['pass']); 
$confirm_pass = htmlspecialchars($_POST['confirm_pass']);

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$requete = $bdd->prepare("INSERT INTO utilisateurs (login, pass, confirm_pass)
                            VALUES (:login, :pass, :confirm_pass)"
);

$requete->bindParam(':login',$login); 
$requete->bindParam(':pass',$pass); 
$requete->bindParam(':confirm_pass',$confirm_pass); 

if($requete->execute())
echo 'yes' ; 
else
echo 'no'; 