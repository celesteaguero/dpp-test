<?php
require __DIR__.'/db.php';
$t=preg_replace('/[^a-f0-9]/','',$_GET['d']??'');
$s=$db->prepare("SELECT data FROM demo WHERE token=?");$s->execute([$t]);$r=$s->fetchColumn();
if(!$r)out(['error'=>'demo no encontrada'],404);
$dir=__DIR__.'/../uploads/'.$t;
if(isset($_GET['del'])){@unlink($dir.'/'.basename($_GET['del']));out(['ok'=>1]);}
$f=$_FILES['file']??null;
if(!$f||$f['error']!==UPLOAD_ERR_OK)out(['error'=>'archivo no recibido (¿supera el límite del servidor?)'],400);
if($f['size']>5*1048576)out(['error'=>'máximo 5 MB'],413);
$ext=['application/pdf'=>'pdf','image/png'=>'png','image/jpeg'=>'jpg'][(new finfo(FILEINFO_MIME_TYPE))->file($f['tmp_name'])]??null;
if(!$ext)out(['error'=>'solo PDF, PNG o JPG'],415);
$ty=preg_replace('/[^A-Za-z0-9-]/','-',$_POST['type']??'doc');
if($ty==='imagen'&&$ext==='pdf')out(['error'=>'la imagen debe ser PNG o JPG'],415);
$sku=preg_replace('/[^A-Za-z0-9-]/','',json_decode($r,true)['a']['sku']??'DPP')?:'DPP';
@mkdir($dir,0755,true);
$name="$sku-$ty.$ext";$n=1;while(is_file("$dir/$name"))$name="$sku-$ty-".(++$n).".$ext";
if(!move_uploaded_file($f['tmp_name'],"$dir/$name"))out(['error'=>'no se pudo guardar (permisos de uploads/)'],500);
out(['file'=>$name,'url'=>"uploads/$t/$name"]);
