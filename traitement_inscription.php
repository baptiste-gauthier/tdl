<?php

require_once("models/Model.php"); 

$model = new Model() ; 

$login = htmlspecialchars($_POST['login']); 
$pass = htmlspecialchars($_POST['pass']); 
$confirm_pass = htmlspecialchars($_POST['confirm_pass']);

$result = $model->getAllLogin($login); 

$model->insertUser($result,$login,$pass,$confirm_pass); 


