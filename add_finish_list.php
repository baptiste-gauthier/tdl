<?php

session_start() ; 

require_once('models/Model.php'); 

$model = new Model(); 

$get = trim($_GET['list']); 

$model->updateFinishTask($_SESSION['id'], $get); 


