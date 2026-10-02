PÁGINA DE SARAÍ – VERSIÓN 2.0
================================

ESTRUCTURA
-----------
index.html   = estructura de la página
style.css    = diseño, colores y adaptación al celular
script.js    = textos, fechas, recuerdos, fotos y canción
fotos/       = coloca aquí tus fotografías

CÓMO EDITAR
------------
1. Abre script.js.
2. Busca la sección SITE.
3. Cambia los textos entre comillas.
4. Para agregar un recuerdo, copia un bloque dentro de timeline.
5. Para agregar una foto:
   - sube la foto a la carpeta fotos/
   - agrega una línea dentro de photos, por ejemplo:
     { file: "fotos/foto1.jpg", caption: "Nuestro recuerdo ❤️" }
6. Guarda los cambios y vuelve a subir los archivos a GitHub Pages.

GITHUB PAGES
------------
Sube index.html, style.css, script.js y la carpeta fotos a un repositorio público.
Después activa Settings > Pages > Deploy from a branch > main > /(root).

IMPORTANTE
----------
La página es estática y funciona perfectamente con GitHub Pages. Para cambiar contenido no necesitas servidor ni base de datos: editas script.js y/o agregas fotos.
