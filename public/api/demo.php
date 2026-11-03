<?php
header('Content-Type: application/json; charset=utf-8');
function out($x,$c=200){http_response_code($c);echo json_encode($x,JSON_UNESCAPED_UNICODE);exit;}
$cfg=null;foreach(['/home2/hosting57889us/dpp-config.php',__DIR__.'/config.php'] as $f)if(is_file($f)){$cfg=require $f;break;}
if(!$cfg)out(['error'=>'config'],500);
try{$db=new PDO("mysql:host={$cfg['host']};dbname={$cfg['name']};charset=utf8mb4",$cfg['user'],$cfg['pass'],[PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION]);
$db->exec("CREATE TABLE IF NOT EXISTS demo(token CHAR(10) PRIMARY KEY,data MEDIUMTEXT NOT NULL,status ENUM('Draft','Published') NOT NULL DEFAULT 'Draft',created_at DATETIME NOT NULL,updated_at DATETIME NOT NULL)");
$db->exec("DELETE FROM demo WHERE updated_at<(NOW()-INTERVAL 24 HOUR)");}catch(Throwable $e){out(['error'=>'db'],500);}
$a=$_GET['a']??'';$t=preg_replace('/[^a-f0-9]/','',$_GET['d']??'');
$raw=file_get_contents('php://input');if(strlen($raw)>200000)out(['error'=>'size'],413);
$j=$raw!==''?json_decode($raw,true):null;
if($a==='new'){if(!is_array($j))out(['error'=>'data'],400);$t=bin2hex(random_bytes(5));
$db->prepare("INSERT INTO demo VALUES(?,?,'Draft',NOW(),NOW())")->execute([$t,json_encode($j,JSON_UNESCAPED_UNICODE)]);out(['token'=>$t,'data'=>$j,'status'=>'Draft']);}
$s=$db->prepare("SELECT data,status FROM demo WHERE token=?");$s->execute([$t]);$r=$s->fetch(PDO::FETCH_ASSOC);
if(!$r)out(['error'=>'notfound'],404);
if($a==='get')out(['data'=>json_decode($r['data'],true),'status'=>$r['status']]);
if($a==='save'){if(!is_array($j))out(['error'=>'data'],400);$db->prepare("UPDATE demo SET data=?,status='Draft',updated_at=NOW() WHERE token=?")->execute([json_encode($j,JSON_UNESCAPED_UNICODE),$t]);out(['status'=>'Draft']);}
if($a==='publish'){$d=json_decode($r['data'],true);$sum=array_sum(array_map(fn($m)=>(float)($m['p']??0),$d['b']['mat']??[]));
if(abs($sum-100)>0.001)out(['error'=>'La composición no suma 100%'],422);
$db->prepare("UPDATE demo SET status='Published',updated_at=NOW() WHERE token=?")->execute([$t]);out(['status'=>'Published']);}
out(['error'=>'action'],400);
