<?php

$site = $_GET['site'] ?? null;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE");
header("Content-Type: application/json; charset=UTF8");


$ip = gethostbyname($site);

$data  =[ "ip"=>$ip];    

echo  $dataJson = json_encode($data);

exit();