# Contexto del proyecto: Editor de Pasaporte Digital de Producto (DPP)

## Objetivo
Prototipo **demostrable e interactivo** para cargar los datos de un DPP textil (ESPR, Reglamento UE 2024/1781). Cliente ficticio: Vela Textile S.A. (Madrid). Producto de ejemplo: camiseta unisex de algodón orgánico, SKU `VT-CAM-001`.
- Sin usuarios por ahora. Los datos son **efímeros**: cada demo tiene un token y se borra a las 24 h.
- Lo usa una sola persona (Sustainability Manager sin perfil técnico), así que la UX debe ser simple.

## Restricciones de despliegue
- Hosting: Apache + MySQL + PHP (hasta 8.5), proveedor Webempresa. **Sin SSH ni Composer ni Node en el servidor.**
- Despliegue por **FTPS (puerto 21)** subiendo archivos. Todas las dependencias de terceros van incluidas como archivos.
- Carpeta pública: `/home2/hosting57889us/public_html/celaguero.com/dpp-test`
- Credenciales de BD fuera del webroot: `/home2/hosting57889us/dpp-config.php` (alternativa: `public/api/config.php`).
- Para pruebas locales: Apache + MySQL propios, con `public/api/config.php` local.

## Estructura (entregada en `dpp-demo.zip`)
```
public/
  index.html        Editor (Alpine.js, módulos A-D en acordeón)
  dpp.html          Vista pública del pasaporte (lee ?d=TOKEN)
  assets/           app.css, common.js, alpine.min.js, qrcode.js
  api/demo.php      API JSON (PDO, sin framework) + api/.htaccess
config.sample.php   Plantilla de credenciales
database/install.sql  (la tabla también se autocrea)
```

## Modelo de datos (JSON guardado en `demo.data`)
`a` identificación (batch, sku, csrd, eudr) · `b` materiales (`mat[{n,p}]`), cadena de 5 etapas (`chain[{s,n,c}]`), químicos · `c` impacto (dur, co2, h2o, kwh, micro) · `d` circularidad (care[], repair, rec, col).
Tabla MySQL `demo(token, data, status Draft|Published, created_at, updated_at)`.

## API (`api/demo.php?a=...&d=TOKEN`)
`new` (POST datos iniciales) · `get` · `save` (POST, vuelve a Draft) · `publish` (comprueba suma = 100%). Borra demos con más de 24 h en cada petición. Busca config en `/home2/hosting57889us/dpp-config.php` y luego `api/config.php`.

## Reglas de validación implementadas
Suma de fibras = 100% (en vivo, rojo/verde) · SKU alfanumérico con guiones · durabilidad entero > 0 · huella de carbono > 0 · URLs con `https://`. "Publicar" queda bloqueado hasta cumplirlas. Al publicar se genera QR SVG descargable y enlace a `dpp.html?d=TOKEN`.

## Diseño
Tema oscuro con acento turquesa (`#00e5c8`), fondo `#0f1117`, tarjetas `#242838`, fuente Inter con respaldo del sistema. CSS propio sin build.

## Estado
Entregada una primera versión **sin probar con PHP/MySQL reales**. Hay que verificar:
1. `api/demo.php?a=get` devuelve `{"error":"notfound"}` (PHP y BD funcionan).
2. El editor crea la demo, autoguarda y recupera los datos al recargar.
3. Publicar genera QR y `dpp.html` muestra los datos.

## Pendiente (siguientes pasos)
- Subida de certificados (PDF/PNG/JPG, 5 MB, renombrado `{SKU}-{Cert}.ext`) e imagen del producto.
- Mapa SVG de la cadena con coordenadas, y modal de alta de proveedores.
- Simulación de integración ERP (autocompletar Módulo A al salir del SKU).
- Roles simulados y capas de acceso (público / B2B / autoridades).
- Campos de la investigación aún ausentes: contenido reciclado, registro EPR, declaración de conformidad ESPR, puntuación de reciclabilidad.
- Fuentes Inter y JetBrains Mono autoalojadas.

## Decisiones de datos ya tomadas
Operador: Vela Textile S.A., Madrid. Energía en kWh (no MJ). Durabilidad = nº de lavados (50). Cadena de ejemplo en Egipto, Túnez y Marruecos. Normativa de referencia: ESPR 2024/1781 (no el reglamento 2023/1542 que aparecía por error en un borrador).

## Cambios v2
Añadidos: subida de certificados e imagen (`api/upload.php`, `uploads/<token>/{SKU}-{tipo}.ext`), catálogo de proveedores con modal de alta, mapa SVG de la cadena con distancia a Madrid (`mapSvg`/`dist` en `common.js`), `api/db.php` común y limpieza de archivos al caducar la demo. `uploads/.htaccess` bloquea la ejecución de scripts. Pendiente: simulación ERP, roles/capas de acceso, campos extra de la investigación, fuentes autoalojadas.
