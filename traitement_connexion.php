<?php
session_start(); 
$login = $_POST['login'] ; 
$pass = $_POST['pass'] ; 

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$requete = $bdd->prepare("SELECT login,pass
                            FROM utilisateurs
                                WHERE login = :login
                                    AND pass = :pass
"); 

$requete->bindParam(':login',$login); 
$requete->bindParam(':pass',$pass);

$requete->execute(); 

$result = $requete->fetchAll(PDO::FETCH_ASSOC) ;

if(!empty($login) && !empty($pass))
{
    if(empty($result))
    echo 'error_log' ;
    else
    $_SESSION['login'] = $login ; 
    echo 'ok' ;
}
else
{
    echo 'champs_vides';     
}

