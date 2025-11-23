# Informe del Taller Bruno — Clase 008 / Clase 009

## Descripción
-----------

En este taller usamos la herramienta Bruno para ejecutar y observar peticiones HTTP contra la API pública JSONPlaceholder (https://jsonplaceholder.typicode.com/). El propósito fue practicar el uso de métodos HTTP (GET, POST, PUT, PATCH, DELETE), entender dónde y cómo se envían parámetros (query string vs body JSON) y analizar las respuestas (códigos de estado, cabeceras y cuerpo).

## Objetivos
---------

- Ejecutar ejemplos reales con Bruno y verificar el comportamiento de cada método HTTP.
- Diferenciar parámetros enviados por query y por body, y observar su efecto en la respuesta.
- Registrar los códigos de respuesta y el formato del cuerpo retornado por la API.
- Preparar una breve presentación con las observaciones claves y conclusiones.

## Resumen de actividades realizadas
--------------------------------

1. Instalación y configuración
   - Instalamos Bruno (GUI/CLI según preferencia) y abrimos la carpeta del repositorio con la colección de archivos `.bru`.
2. Preparación de la colección
   - Confirmamos/creamos archivos `.bru` para cada endpoint (por ejemplo: `get-all-posts.bru`, `create-post.bru`, `update-post-put.bru`, etc.).
3. Ejecución de peticiones
   - Ejecutamos peticiones GET, POST, PUT, PATCH y DELETE contra los endpoints de JSONPlaceholder.
   - Para las peticiones POST/PUT/PATCH incluimos cabecera `Content-Type: application/json` y body JSON de prueba.

-----------------------------------------------

- Método HTTP: identificar el método usado y su semántica (lectura vs creación vs actualización vs eliminación).
- URL y parámetros: distinguir parámetros en la `query` (por ejemplo `?postId=1`) frente a los datos enviados en el `body`.
- Cabeceras: verificar `Content-Type` en peticiones con body; observar cabeceras de respuesta (`Content-Type`, `Server`, etc.).
- Código de estado: anotar si la API responde con `200`, `201`, `204`, `404`, etc. (JSONPlaceholder suele devolver `200` para GET, `201` para POST; PUT/PATCH/DELETE normalmente devuelven `200` o respuestas simuladas).
- Cuerpo de la respuesta: revisar la estructura JSON devuelta (campo `id` en respuestas de creación, campos actualizados en PUT/PATCH, listas en GET).


## Observaciones concretas (ejemplos típicos)
-----------------------------------------

- GET `/posts` → Código: 200, cuerpo: lista de posts (JSON array).
- GET `/posts/1` → Código: 200, cuerpo: objeto post con campos `id`, `title`, `body`, `userId`.
- POST `/posts` (body JSON) → Código: 201 (creación simulada), cuerpo: objeto creado con `id` devuelto.
- PUT `/posts/1` → Código: 200, cuerpo: objeto completo actualizado (en APIs reales reemplaza recurso).
- PATCH `/posts/1` → Código: 200, cuerpo: objeto con los campos modificados.
- DELETE `/posts/1` → Código: 200/204 (JSONPlaceholder devuelve respuesta simulada indicando eliminación).

## Resultados y conclusiones
-------------------------

- Bruno facilita ejecutar lotes de peticiones y ver rápidamente método, URL, cabeceras, body y respuesta.
- Practicar con JSONPlaceholder permite entender el flujo HTTP sin necesidad de un backend propio, pero recuerda que no persiste cambios reales.
- En la presentación conviene mostrar 3 ejemplos concretos: un GET, un POST y una PATCH/PUT para ilustrar diferencias en método, código y cuerpo.

## Cómo reproducir (pasos rápidos)
------------------------------

1. Instalar Bruno: https://www.usebruno.com/
2. Abrir la carpeta del repo en Bruno o importar los archivos `.bru`.
3. Ejecutar `get-all-posts.bru`, observar respuesta 200 y el body.
4. Ejecutar `create-post.bru`, observar respuesta 201 y el objeto creado.
5. Ejecutar `update-post-put.bru` y `update-post-title.bru`, comparar respuestas.
