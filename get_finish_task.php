<?php

session_start() ; 

require_once('models/Model.php');

$model = new Model() ; 

$result = $model->getFinishTask($_SESSION['id']); 

$json = json_encode($result) ; 

echo $json ; 