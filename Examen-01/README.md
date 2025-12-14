# **Documentación de APIs REST con Swagger - Examen 01**

**Autor:** Melany Lema

**Archivos incluidos:**
  - `swagger.yaml` — especificación OpenAPI 3.0 que documenta los endpoints usados en las pruebas (.bru).
  - `README.md` — este documento con la Parte 1 (teoría) y Parte 2 (taller práctico), instrucciones y resumen de lo realizado.

## **Parte 1 — Introducción teórica**

### **Importancia de documentar una API:**
  - Facilita el entendimiento: cualquier desarrollador puede conocer rápidamente cómo consumir la API.
  - Mejora la colaboración entre frontend, backend y QA.
  - Reduce errores y malentendidos sobre parámetros, formatos y códigos de respuesta.
  - Permite pruebas interactivas mediante herramientas como Swagger UI y facilita la validación automática.

### **Qué es Swagger / OpenAPI:**
  - Swagger (ahora parte del ecosistema OpenAPI) es un conjunto de herramientas y un formato estándar para describir APIs REST.
  - Con OpenAPI se describe la estructura de la API (endpoints, parámetros, cuerpos, respuestas y esquemas) en YAML o JSON.

### **Herramientas principales:**
  - `Swagger Editor` — editor para escribir y validar especificaciones OpenAPI.
  - `Swagger UI` — interfaz que muestra la documentación de forma interactiva y permite ejecutar peticiones.
  - `OpenAPI Generator` / `Swagger Codegen` — genera clientes o servidores a partir de la especificación.

## **Parte 2 — Taller práctico (JSONPlaceholder)**

### **Objetivo**
- Documentar los endpoints de JSONPlaceholder usados en las pruebas (`.bru`) y generar una especificación OpenAPI 3.0 que permita probarlos desde Swagger UI.

### **Requisitos**
- Navegador web con acceso a Internet.
- Conocimientos básicos de HTTP y JSON.

### **¿Que se realizó?**
- Analicé los archivos de prueba (`.bru`) en la carpeta `Clase-008-MelanyLema` para identificar los endpoints y las operaciones que se usan en los ejercicios: `get-all-posts`, `get-post-by-id`, `create-post`, `update-post-put`, `update-post-title`, `delete-post`, `get-all-comments`, `get-comments-by-post`, `create-comment`, `get-all-users`, `get-user-by-id`, `get-all-albums`, `get-album-by-id`, `get-photos-by-album`, `get-all-photos`, `create-album`, `get-all-todos`, `get-todo-by-id`, `create-todo`.

- Con base en esos archivos, generé/actualicé la especificación `Examen-01/swagger.yaml` incluyendo:
  - Endpoints documentados: `/posts`, `/posts/{id}`, `/posts/{id}/comments`, `/comments`, `/users`, `/users/{id}`, `/albums`, `/albums/{id}`, `/albums/{id}/photos`, `/photos`, `/todos`, `/todos/{id}`.
  - Operaciones: `GET` para lectura en todos los recursos; `POST` para creación en `posts`, `comments`, `albums`, `todos`; `PUT`/`PATCH`/`DELETE` en `/posts/{id}` según los `.bru` disponibles.
  - Schemas en `components/schemas`: `Post`, `CreatePost`, `Comment`, `CreateComment`, `User`, `Album`, `CreateAlbum`, `Photo`, `Todo`, `CreateTodo`, `Address`, `Geo`, `Company`.

- Añadí ejemplos básicos (`example` en algunos esquemas) para facilitar la lectura y pruebas rápidas.

- Aseguré que la especificación apunte al servidor real `https://jsonplaceholder.typicode.com` para que desde Swagger UI se puedan ejecutar las peticiones de prueba (mock real).


### **Cómo verificar y probar**
1. Abrir `https://editor.swagger.io/`.
2. Cargar o pegar el contenido de `Examen-01/swagger.yaml`.
3. En la vista derecha (Swagger UI) expandir los endpoints y usar `Try it out`.
4. Ejecutar peticiones (por ejemplo `GET /posts`) y comprobar las respuestas provenientes de `https://jsonplaceholder.typicode.com`.


### **Notas finales**
- Este entregable cumple con la documentación mínima solicitada en el enunciado: introducción teórica y taller práctico con especificación OpenAPI que cubre los endpoints usados en las pruebas (`.bru`).
