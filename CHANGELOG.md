# v0.5.2 · Correcciones
- Marca unificada a "Sustainable Textiles" en todos los archivos (a partir de tus copias).
- Chevron de los módulos de nuevo visible: la clase `up` chocaba con el estilo del campo de subida; ahora el giro usa `rot`.
- El botón Siguiente ya se activa al cumplir las reglas (`disabled` con valor 0 se trataba como activo).
- Nuevo botón "Mostrar / Ocultar campos pendientes (n)" antes de Siguiente; la lista de pendientes queda oculta por defecto. En el último módulo muestra los pendientes de todo el pasaporte.
- Tracking agregado

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