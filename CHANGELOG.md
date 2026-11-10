# v0.7.0 · Accesibilidad AAA, pasos 2 y 3: contraste y errores
- Contraste 7:1 en todo el texto (auditado con navegador en editor, estado con errores y dpp.html; 0 fallos). Nueva paleta de texto: `--t2` #c4c9d2, `--tm` #b2b4be, `--ac` #bac7f5, `--er` #f79c9c, `--ok` #3dcc71; botón principal `--ac6` #374fa6 (blanco 7,4:1) y hover `--ac7` #2c48a8. Bordes y gráficos conservan #506fe1 (3:1). Mapa de la cadena con pines y líneas #bac7f5.
- Campos de solo lectura sin transparencia (borde discontinuo en lugar de opacidad).
- Errores: mensaje junto a cada campo ("Error: …"), enlazado con `aria-describedby`, `aria-live="polite"` y `aria-invalid`; incluye el total de fibras.
- Siguiente y Publicar ya no se deshabilitan (`aria-disabled`): al pulsarlos con errores muestran la lista y mueven el foco al primer campo pendiente. Cada elemento de la lista es un enlace que abre el módulo y enfoca el campo.
- Foco visible reforzado (contorno de 3 px) en campos, botones y enlaces; antes `outline:0` lo anulaba en los campos.
- Tamaño de objetivos mínimo de 44×44 px en botones, iconos de subida y chips (auditado: 0 por debajo).
- Pendiente AAA: revisión de nivel de lectura y lenguaje, orden de tabulación y lector de pantalla real, `dpp.html` (encabezados y regiones).

# v0.6.0 · Accesibilidad AAA, paso 1: etiquetas
- Todos los campos (69 en la demo) tienen `<label>` asociado (`for`/`id`, con ids dinámicos en fibras y etapas); verificado sin ids duplicados.
- Fibras: etiquetas ocultas visualmente ("Fibra 1", "Porcentaje de la fibra 1") en lugar de `aria-label`.
- Los campos de archivo ya no usan `hidden` (no se podían alcanzar con teclado): ahora son accesibles y el recuadro muestra el foco.
- Títulos de grupo sin control pasan de `<label>` a `<span class="lbl">`; pictogramas de cuidado agrupados con `role="group"`.
- `aria-invalid` ligado a los campos con error y `aria-required` en nombre y SKU; el diálogo de proveedor tiene `aria-labelledby`.
- Pendiente AAA: contraste 7:1, mensajes de error vinculados (`aria-describedby`), tamaño de objetivos, foco visible reforzado, revisión de lenguaje y lectura.

# v0.5.3 · Seguimiento y QR
- Añadidos Google Tag Manager y PostHog en `index.html` y `dpp.html` (tus versiones).
- Corregido el ancho del QR (cambio tuyo, sincronizado en mis copias).

# v0.5.2 · Correcciones
- Marca unificada a "Sustainable Textiles" en todos los archivos (a partir de tus copias).
- Chevron de los módulos de nuevo visible: la clase `up` chocaba con el estilo del campo de subida; ahora el giro usa `rot`.
- El botón Siguiente ya se activa al cumplir las reglas (`disabled` con valor 0 se trataba como activo).
- Nuevo botón "Mostrar / Ocultar campos pendientes (n)" antes de Siguiente; la lista de pendientes queda oculta por defecto. En el último módulo muestra los pendientes de todo el pasaporte.

# v0.5.1 · Flujo Siguiente
- Botón Siguiente al final de cada módulo: cierra el actual, abre el siguiente y se desplaza a él. Bloqueado (deshabilitado) mientras el módulo tenga errores, que se listan debajo; el último módulo lleva a Publicar.
- Validación por módulo (mE) compartida con la lista global de errores.

# v0.4.0 · Fase 2a
- Navbar sticky, cabeceras de módulo con icono, subtítulo, círculo de estado (completo/pendiente) y chevron.
- Barra de control: Expandir/Contraer todo, Guardar cambios, Publicar, estado, Previsualizar, Nueva demo.
- Módulo A: imagen con arrastrar/soltar, nombre y color con vista previa, fecha de creación e historial (se guarda en la clave `m` del JSON).
- dpp.html usa nombre y color del producto.
- Fuentes Inter y JetBrains Mono e iconos Material (sprite SVG) autoalojados en assets/.
- Pendiente: logo real (ahora texto), fase 2b.