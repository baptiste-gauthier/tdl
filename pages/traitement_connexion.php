<?php

session_start(); 
require_once('../models/Model.php') ; 

$model = new Model ; 

$login = $_POST['login'] ; 
$pass = $_POST['pass'] ; 

$result = $model->connexionUser($login,$pass) ;

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

