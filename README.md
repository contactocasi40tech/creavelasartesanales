# Landing: Diseña y Crea Velas Artesanales

Micrositio estático en español para promocionar el curso online de velas artesanales. No utiliza servidor, base de datos ni dependencias externas obligatorias; las imágenes deben incluirse localmente en `images/`.

## Ajustar la oferta antes de publicar

Edita `site-config.js` para actualizar `checkoutUrl`, `price` y `currency`. El precio de US$37 es el que mostró el checkout de Hotmart al consultarlo con país EE. UU. y puede cambiar por país/impuestos. Verifica el importe, bonos, valoración, acceso y términos vigentes antes de lanzar. El curso fuente anuncia una garantía de 7 días; el sitio la atribuye a la página de ventas y aconseja leer condiciones en Hotmart.

Los `images` de la configuración son rutas relativas. Conserva los archivos locales con los mismos nombres. Las fotos tienen fines ilustrativos y no garantizan que coincidan exactamente con los materiales de las clases.

## Vista previa local

Abre `index.html` en el navegador o inicia un servidor estático simple desde esta carpeta:

```sh
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Descomprime el archivo y sube **el contenido de esta carpeta** a la raíz de un repositorio GitHub. No es necesario subir el proyecto WebDev que la contiene.
2. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente de publicación.
3. El workflow incluido publica el contenido al hacer push a `main` o al ejecutarlo desde **Actions**.

Las rutas CSS e imágenes son relativas (`./...`) para funcionar tanto en un dominio raíz como dentro de `https://usuario.github.io/nombre-del-repositorio/`. Cuando conozcas el dominio final, agrega URL canónica, `og:url`, `og:image` absoluta y `sitemap.xml` si quieres indexar el sitio.

## Evidencia de la oferta

La página muestra US$37 como el importe visto en el checkout con selección de país EE. UU., el enlace de Hotmart indicado y una valoración de Hotmart consultada el 25 de octubre de 2026. El monto, valoración y condiciones pueden cambiar. La página no promete ventas ni ingresos y no usa un contador de urgencia.
