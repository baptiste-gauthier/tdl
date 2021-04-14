<?php

session_start() ; 
$get = trim($_GET['list']); 

$bdd = new PDO('mysql:host=localhost;dbname=tdl', 'root', '');

$requete = $bdd->prepare("SELECT description
                            FROM taches
                                WHERE utilisateur_fk = :id_user
") ; 

$requete->bindParam(':id_user' , $_SESSION['id']) ;

$requete->execute(); 

$result = $requete->fetch() ;

var_dump($result) ; 

if($result == false)
{
    $sql = 'INSERT INTO taches (utilisateur_fk, description) VALUES (:id, :get)';

    var_dump($sql) ; 

    $requete = $bdd->prepare($sql);

    $requete->bindParam(':id', $_SESSION['id']); 
    $requete->bindParam(':get', $get); 
  
    $requete->execute() ; 
    echo 'no' ; 
}
else{
    $requete = $bdd->prepare("UPDATE taches
                                SET description = :des_task 
                                    WHERE utilisateur_fk = :id_user
    "); 
    
    $requete->bindParam(':des_task', $get); 
    $requete->bindParam(':id_user', $_SESSION['id']); 
    
    if($requete->execute())
    echo 'yes' ; 
}
