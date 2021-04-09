<?php

$login = htmlspecialchars($_POST['login']); 
$pass = htmlspecialchars($_POST['pass']); 
$confirm_pass = htmlspecialchars($_POST['confirm_pass']);

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$sql = "SELECT login FROM utilisateurs WHERE login = '{$login}'"; 

$requete = $bdd->query($sql);

$result = $requete->fetch();

if(!$result)
{

    $requete = $bdd->prepare("INSERT INTO utilisateurs (login, pass)
                                VALUES (:login, :pass)"
    );
    
    $requete->bindParam(':login',$login); 
    $requete->bindParam(':pass',$pass); 
    // $requete->bindParam(':confirm_pass',$confirm_pass); 
    
    if(!empty($login) && !empty($pass) && !empty($confirm_pass))
    {
        if($pass == $confirm_pass)
        {
            if($requete->execute())
                echo 'yes' ; 
            else
                echo 'no'; 
        }
        else{
            echo 'mdp_diff' ; 
        }
    }
    
    else {
        echo 'champs_vide' ; 
    }
}
else{
    echo 'error_login' ; 
}


