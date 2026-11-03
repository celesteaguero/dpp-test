const ST=['Ginning','Hilatura','Tejeduría','Confección','Acabado'];
const FIB=['Algodón orgánico','Poliéster reciclado','Elastano','Otra'];
const CARE={wash_30:'Lavado 30 °C',no_tumble:'No secadora',iron_mid:'Plancha media',no_bleach:'No lejía',dry_clean_p:'Limpieza P'};
const MICRO=['Bajo','Moderado-Bajo','Moderado','Alto'];
const SAMPLE=()=>({a:{batch:'BATCH-2026-004',sku:'VT-CAM-001',csrd:false,eudr:false},
b:{mat:[{n:FIB[0],p:60},{n:FIB[1],p:35},{n:FIB[2],p:5}],
chain:[['Alexandria Cotton Hub','Egipto'],['Industrial Zone, Monastir','Túnez'],['Tangier Free Zone','Marruecos'],['Casablanca Manufacturing Park','Marruecos'],['Tunis Industrial Estate','Túnez']].map((x,i)=>({s:ST[i],n:x[0],c:x[1]})),
chem:'Libre de sustancias altamente preocupantes (>0.1% p/p) según REACH. Tintas base agua.'},
c:{dur:50,co2:8.5,h2o:1200,kwh:12,micro:'Moderado-Bajo'},
d:{care:['wash_30','no_tumble','iron_mid'],repair:'https://dpp.velatextile.com/guides/repair-basic',rec:'Apta para reciclaje mecánico de algodón (requiere separación previa por mezcla sintética). No compostable.',col:'https://recuperatelas.org/puntos-limpios'}});
const api=async(a,t,body)=>{try{const r=await fetch('api/demo.php?a='+a+(t?'&d='+t:''),{method:body?'POST':'GET',body:body?JSON.stringify(body):undefined});return await r.json()}catch(e){return{error:'red'}}};
const URLOK=u=>/^https:\/\/\S+\.\S+$/.test(u||'');
