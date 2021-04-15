<?php
session_start(); 
$login = $_POST['login'] ; 
$pass = $_POST['pass'] ; 

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$requete = $bdd->prepare("SELECT *
                            FROM utilisateurs
                                WHERE login = :login
                                    AND pass = :pass
"); 

$requete->bindParam(':login',$login); 
$requete->bindParam(':pass',$pass);

$requete->execute(); 

$result = $requete->fetch(PDO::FETCH_ASSOC) ;

if(!empty($login) && !empty($pass))
{
    if(empty($result))
    {
        echo 'error_log' ;
    }
    else
    {
        $_SESSION['login'] = $login ; 
        $_SESSION['id'] = $result['id'] ; 
        echo 'ok' ;
    }
}
else
{
    echo 'champs_vides';     
}

