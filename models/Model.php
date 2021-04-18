<?php

require_once("database.php"); 

class Model extends Database 
{
    public $bdd ;

    public function __construct(){
        $this->bdd = Database::getPdo();
    }

    public function connexionUser($login,$pass)
    {
        $requete = $this->bdd->prepare("SELECT *
                                    FROM utilisateurs
                                        WHERE login = :login
                                            AND pass = :pass
        "); 

        $requete->bindParam(':login',$login); 
        $requete->bindParam(':pass',$pass);

        $requete->execute(); 

        $result = $requete->fetch(PDO::FETCH_ASSOC) ;

        return $result ; 
    }

    public function getAllLogin($login)
    {
        $sql = "SELECT login FROM utilisateurs WHERE login = '{$login}'"; 

        $requete = $this->bdd->query($sql);

        $result = $requete->fetch();

        return $result ; 
    }

    public function insertUser($result,$login,$pass,$confirm_pass)
    {
        if(!$result)
        {

            $requete = $this->bdd->prepare("INSERT INTO utilisateurs (login, pass)
                                        VALUES (:login, :pass)"
            );
            
            $requete->bindParam(':login',$login); 
            $requete->bindParam(':pass',$pass); 
            
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
            
    }

    public function getTask($session)
    {
        $requete = $this->bdd->prepare("SELECT description
                                    FROM taches
                                        WHERE utilisateur_fk = :id_fk
        "); 

        $requete->bindParam(':id_fk', $session); 

        $requete->execute(); 

        $result = $requete->fetch(PDO::FETCH_ASSOC); 

        return $result; 

    }

    public function getFinishTask($session)
    {
        $requete = $this->bdd->prepare("SELECT finish_tasks
                                    FROM taches
                                        WHERE utilisateur_fk = :id_fk
        "); 

        $requete->bindParam(':id_fk', $session); 

        $requete->execute(); 

        $result = $requete->fetch(PDO::FETCH_ASSOC); 
        
        return $result ; 
    }

    public function insertTask($session,$get)
    {
        $sql = 'INSERT INTO taches (utilisateur_fk, description) VALUES (:id, :get)';

        // var_dump($sql) ; 

        $requete = $this->bdd->prepare($sql);

        $requete->bindParam(':id', $session); 
        $requete->bindParam(':get', $get); 
    
        $requete->execute() ; 
        echo 'no' ;       
    }

    public function updateTask($session,$get)
    {
        $requete = $this->bdd->prepare("UPDATE taches
                                SET description = :des_task 
                                    WHERE utilisateur_fk = :id_user
        "); 
        
        $requete->bindParam(':des_task', $get); 
        $requete->bindParam(':id_user', $session); 
        
        if($requete->execute())
        echo 'yes' ; 
    }

    public function updateFinishTask($session,$get)
    {
        $requete = $this->bdd->prepare("UPDATE taches
                            SET finish_tasks = :finish_task 
                                WHERE utilisateur_fk = :id_user
        "); 

        $requete->bindParam(':finish_task', $get); 
        $requete->bindParam(':id_user', $session); 

        if($requete->execute())
        echo 'yes' ; 
    }

}