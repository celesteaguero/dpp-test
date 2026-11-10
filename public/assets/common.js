const ST=['Ginning','Hilatura','Tejeduría','Confección','Acabado'];
const FIB=['Algodón orgánico','Poliéster reciclado','Elastano','Otra'];
const CARE={wash_30:'Lavado 30 °C',no_tumble:'No secadora',iron_mid:'Plancha media',no_bleach:'No lejía',dry_clean_p:'Limpieza P'};
const MICRO=['Bajo','Moderado-Bajo','Moderado','Alto'];
const FCERT=['GOTS','GRS','OEKO-TEX Standard 100','BCI','Ninguna'];
const TIERN=['Ginning (Desmotado)','Hilatura (Spinning)','Tejeduría (Weaving)','Confección (Garment Making)','Acabado (Finishing)'];
const TIERB=['TIER 4','TIER 3','TIER 2','TIER 1','FINAL STEP'];
const TCERT=['GOTS Certified Facility','OEKO-TEX STeP','ISO 14001','SA8000 Social Accountability','Zero Discharge of Hazardous Chemicals'];
const MD=[['Delta del Nilo','Egipto','GOTS'],['Sevilla','España','GRS'],['','','OEKO-TEX Standard 100']];
const CARE_SVG={wash_30:'<path d="M2 10h20l-2 10H4L2 10z"/><path d="M2 10c0-2 2-4 4-4s4 2 4 4"/><path d="M14 10c0-2 2-4 4-4s4 2 4 4"/><text x="12" y="17" font-size="6" font-weight="bold" text-anchor="middle" fill="currentColor" stroke="none">30</text>',
no_tumble:'<rect x="4" y="4" width="16" height="16" rx="1"/><circle cx="12" cy="12" r="6"/><path d="M19 5L5 19"/>',
iron_mid:'<path d="M7 19h13c1.5 0 2-1 2-2.5S20.5 14 19 14h-1c-1-4-3-7-8-7H4v12h3z"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="13" cy="14" r="1" fill="currentColor"/>',
no_bleach:'<path d="M12 4l9 16H3L12 4z"/><path d="M19 20L5 6"/>',
dry_clean_p:'<circle cx="12" cy="12" r="9"/><text x="12" y="15.5" font-size="10" font-weight="bold" text-anchor="middle" fill="currentColor" stroke="none">P</text>'};
const SUP=[['Alexandria Cotton Hub','Egipto',31.2,29.9],['Industrial Zone, Monastir','Túnez',35.78,10.83],['Tangier Free Zone','Marruecos',35.77,-5.8],['Casablanca Manufacturing Park','Marruecos',33.57,-7.59],['Tunis Industrial Estate','Túnez',36.8,10.18]];
const SAMPLE=()=>({a:{name:'Camiseta unisex de algodón orgánico',color:'#ffffff',colorName:'Blanco',batch:'BATCH-2026-004',sku:'VT-CAM-001',csrd:false,eudr:false,img:''},sup:SUP.map(x=>({n:x[0],c:x[1],lat:x[2],lon:x[3]})),
b:{mat:[0,1,2].map(i=>({n:FIB[i],p:[60,35,5][i],loc:MD[i][0],c:MD[i][1],cert:MD[i][2],certFile:'',certUrl:''})),
chain:SUP.map((x,i)=>({s:ST[i],n:x[0],c:x[1],lat:x[2],lon:x[3],cert:TCERT[i],certFile:'',certUrl:'',tcFile:'',tcUrl:''})),certs:[],
chem:'Libre de sustancias altamente preocupantes (>0.1% p/p) según REACH. Tintas base agua.'},
c:{dur:50,co2:8.5,h2o:1200,kwh:12,micro:'Moderado-Bajo'},
d:{care:['wash_30','no_tumble','iron_mid'],repair:'https://dpp.sustainabletextiles.com/guides/repair-basic',rec:'Apta para reciclaje mecánico de algodón (requiere separación previa por mezcla sintética). No compostable.',col:'https://recuperatelas.org/puntos-limpios'}});
const api=async(a,t,body)=>{try{const r=await fetch('api/demo.php?a='+a+(t?'&d='+t:''),{method:body?'POST':'GET',body:body?JSON.stringify(body):undefined});return await r.json()}catch(e){return{error:'red'}}};
const URLOK=u=>/^https:\/\/\S+\.\S+$/.test(u||'');

const fix=d=>{const s=SAMPLE();d.sup??=s.sup;d.a.img??='';d.a.name??=s.a.name;d.a.color??=s.a.color;d.a.colorName??=s.a.colorName;d.b.certs??=[];d.b.chain.forEach((c,i)=>{c.lat??=s.b.chain[i]?.lat;c.lon??=s.b.chain[i]?.lon;c.cert??='';c.certFile??='';c.certUrl??='';c.tcFile??='';c.tcUrl??=''});d.b.mat.forEach(m=>{m.loc??='';m.c??='';m.cert??='Ninguna';m.certFile??='';m.certUrl??=''});return d};
const upl=async(t,ty,f)=>{const fd=new FormData();fd.append('type',ty);fd.append('file',f);try{return await(await fetch('api/upload.php?d='+t,{method:'POST',body:fd})).json()}catch(e){return{error:'red'}}};
const MAD={lat:40.4,lon:-3.7};
const geo=ch=>ch.filter(s=>s.lat!==''&&s.lon!==''&&s.lat!=null&&s.lon!=null&&!isNaN(s.lat)&&!isNaN(s.lon)).map(s=>({lat:+s.lat,lon:+s.lon}));
const km=(a,b)=>{const r=Math.PI/180,h=Math.sin((b.lat-a.lat)*r/2)**2+Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin((b.lon-a.lon)*r/2)**2;return 12742*Math.asin(Math.sqrt(h))};
const dist=ch=>{const p=[...geo(ch),MAD];let t=0;for(let i=1;i<p.length;i++)t+=km(p[i-1],p[i]);return Math.round(t).toLocaleString('es-ES')};
const mapSvg=ch=>{const W=480,H=230,X=o=>(o+12)/48*W,Y=a=>(45-a)/23*H,p=[...geo(ch),MAD];let g='';
for(let k=-10;k<=30;k+=10)g+=`<line x1="${X(k)}" y1="0" x2="${X(k)}" y2="${H}"/>`;for(let k=25;k<=45;k+=10)g+=`<line x1="0" y1="${Y(k)}" x2="${W}" y2="${Y(k)}"/>`;
const ln=p.slice(1).map((b,i)=>`<line x1="${X(p[i].lon)}" y1="${Y(p[i].lat)}" x2="${X(b.lon)}" y2="${Y(b.lat)}" stroke="#bac7f5" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#ar)"/>`).join('');
const pin=p.map((q,i)=>`<circle cx="${X(q.lon)}" cy="${Y(q.lat)}" r="9" fill="${i==p.length-1?'#fff':'#bac7f5'}"/><text x="${X(q.lon)}" y="${Y(q.lat)+4}" text-anchor="middle" font-size="11" font-weight="700" fill="#12131a">${i==p.length-1?'M':i+1}</text>`).join('');
return `<svg class="map" viewBox="0 0 ${W} ${H}" role="img" aria-label="Mapa de la cadena de suministro"><defs><marker id="ar" viewBox="0 0 10 10" refX="14" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M1 1L9 5L1 9z" fill="#bac7f5"/></marker></defs><g class="gr">${g}</g>${ln}${pin}</svg>`};
