# mimbreriagorriti

Consignas del TPO:

1. Poseer al menos 3 páginas html, siendo su temática libre.
2. Utilizar etiquetas semánticas para estructurar el sitio de forma correcta.
3. Contener un formulario de contacto con validación realizada mediante Javascript.
4. Utilizar iframes, íconos de FontAwesome, y fuentes locales o bien de Google Fonts.
5. Tener una página totalmente responsive con 3 puntos de corte para 3 tamaños de
dispositivos (PC escritorio, Tablet, Celular).
6. Utilizar al menos una animación, transformación o una transición (indicar dónde fue
incorporada la animación).
7. Poseer una estructura HTML maquetada con Flexbox y/o Grid.
8. Sólo podrá utilizar Bootstrap en la página del formulario del sitio web.
9. La página deberá subirse a un servidor on-line para poder ser navegada por el
Docente. Ejemplo: Netlify o similar.

Resolución del TPO:
1. La web mimbreriagorriti posee 4 páginas html: index.html, productos.html, ubicacion.html y contacto.html
2. En index.html se han utilizado las etiquetas semánticas header, nav, article y footer
3. El formularo contenido en contacto.html tiene validación por js cuyo código se encuentra en apps.js de la carpeta js
4. El iframe se utiliza en ubicacion.html mostrando la ubicación del local con el embebido de google maps. FontAwesome se utiliza en los íconos del footer y de Google Fonts se utilizó la fuente poppins definida en el archivo styles.css
5. index.html tiene tres puntos de corte reflejados en el archivo styles.css de la carpeta css:
    a. hasta un máximo de 640px de ancho de pantalla
    b. entre 640px y 1280px de ancho de pantalla
    c. más de 1280px de ancho de pantalla
6. Se utilizó una animación en los títulos principales: tag h1 de cada sección del sitio y con un hover sobre los botones de la barra de navegación.
7. En index.html, la clase contenedor del div principal del body se aplicó la maquetación flex
8. Se utilizó bootstrap en los componentes del formulario de la página contacto.html
9. Subido en el repositorio de github: https://willymiller.github.io/mimbreriagorriti/