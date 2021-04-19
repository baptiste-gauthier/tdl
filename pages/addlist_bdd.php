<?php

session_start() ; 

require_once('../models/Model.php'); 

$model = new Model(); 

$get = trim($_GET['list']); 

$result = $model->getTask($_SESSION['id']) ;

// var_dump($result) ; 

if($result == false)
{
    $model->insertTask($_SESSION['id'],$get) ;
}
else{
    $model->updateTask($_SESSION['id'],$get) ;
}
