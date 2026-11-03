<?php
header('Content-Type: application/json; charset=utf-8');
function out($x,$c=200){http_response_code($c);echo json_encode($x,JSON_UNESCAPED_UNICODE);exit;}
$cfg=null;foreach(['/home2/hosting57889us/dpp-config.php',__DIR__.'/config.php'] as $f)if(is_file($f)){$cfg=require $f;break;}
if(!$cfg)out(['error'=>'config'],500);
try{$db=new PDO("mysql:host={$cfg['host']};dbname={$cfg['name']};charset=utf8mb4",$cfg['user'],$cfg['pass'],[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
$db->exec("CREATE TABLE IF NOT EXISTS demo(token CHAR(10) PRIMARY KEY,data MEDIUMTEXT NOT NULL,status ENUM('Draft','Published') NOT NULL DEFAULT 'Draft',created_at DATETIME NOT NULL,updated_at DATETIME NOT NULL)");
foreach($db->query("SELECT token FROM demo WHERE updated_at<(NOW()-INTERVAL 24 HOUR)")->fetchAll(PDO::FETCH_COLUMN) as $k){foreach(glob(__DIR__.'/../uploads/'.$k.'/*')?:[] as $f)@unlink($f);@rmdir(__DIR__.'/../uploads/'.$k);}
$db->exec("DELETE FROM demo WHERE updated_at<(NOW()-INTERVAL 24 HOUR)");}catch(Throwable $e){out(['error'=>'db'],500);}
