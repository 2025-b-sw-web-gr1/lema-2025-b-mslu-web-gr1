# Proyecto 001 - API RESTful de Usuarios y Publicaciones

**Estudiante:** Melany Lema  


## Descripción del Proyecto

Este proyecto implementa la documentación completa de una API RESTful que maneja la relación **1 a muchos** entre **Usuarios y Publicaciones**:
- **1 Usuario** puede tener **muchas Publicaciones**
- Cada publicación pertenece a un único usuario

## Objetivos

- Diseñar endpoints RESTful siguiendo las mejores prácticas
- Documentar la API usando el estándar OpenAPI 3.0 (Swagger)
- Crear colección de peticiones Bruno para testing
- Implementar relación 1 a muchos entre entidades

## Arquitectura de la API

### Entidades

#### Usuario (User)
```json
{
  "id": 1,
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "username": "juanp"
}
```

#### Publicación (Post)
```json
{
  "id": 1,
  "title": "Mi primera publicación",
  "content": "Este es el contenido de mi primera publicación",
  "userId": 1,
  "createdAt": "2025-12-14T10:00:00Z"
}
```

## Endpoints de la API

### Usuarios (/users)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/users` | Obtener todos los usuarios |
| GET | `/users/{id}` | Obtener usuario por ID |
| POST | `/users` | Crear nuevo usuario |
| PUT | `/users/{id}` | Actualizar usuario completo |
| DELETE | `/users/{id}` | Eliminar usuario |

### Publicaciones (/posts)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/posts` | Obtener todas las publicaciones |
| GET | `/posts/{id}` | Obtener publicación por ID |
| POST | `/posts` | Crear nueva publicación |
| PUT | `/posts/{id}` | Actualizar publicación completa |
| DELETE | `/posts/{id}` | Eliminar publicación |

### Relación 1 a Muchos

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/users/{id}/posts` | Obtener todas las publicaciones de un usuario |

## Estructura del Proyecto

```
Proyecto-01/
├── users-posts-api.yaml          # Documentación Swagger/OpenAPI
├── Proyecto01/                   # Colección Bruno
│   ├── bruno.json               # Configuración de Bruno
│   ├── get-all-users.bru        # Obtener todos los usuarios
│   ├── get-user-by-id.bru       # Obtener usuario por ID
│   ├── create-user.bru          # Crear usuario
│   ├── update-user.bru          # Actualizar usuario
│   ├── delete-user.bru          # Eliminar usuario
│   ├── get-all-posts.bru        # Obtener todas las publicaciones
│   ├── get-post-by-id.bru       # Obtener publicación por ID
│   ├── create-post.bru          # Crear publicación
│   ├── update-post.bru          # Actualizar publicación
│   ├── delete-post.bru          # Eliminar publicación
│   └── get-posts-by-user.bru    # Obtener publicaciones de un usuario
└── README.md                     # Este archivo
```

## Uso

### Documentación Swagger

1. Abrir el archivo `users-posts-api.yaml` en [Swagger Editor](https://editor.swagger.io/)
2. Explorar los endpoints disponibles
3. Probar las peticiones directamente desde la interfaz

### Colección Bruno

1. Importar la carpeta `Proyecto01` en Bruno
2. Configurar el servidor base en `bruno.json` si es necesario
3. Ejecutar las peticiones según sea necesario

## Ejemplos de Uso

### Crear un Usuario
```http
POST /users
Content-Type: application/json

{
  "name": "Carlos López",
  "email": "carlos@example.com",
  "username": "carlosl"
}
```

### Crear una Publicación
```http
POST /posts
Content-Type: application/json

{
  "title": "Mi primera publicación",
  "content": "Este es el contenido de mi primera publicación",
  "userId": 1
}
```

### Obtener Publicaciones de un Usuario
```http
GET /users/1/posts
```

## Estándar RESTful

Esta API sigue los principios REST:

- ✅ **Métodos HTTP estándar**: GET, POST, PUT, DELETE
- ✅ **Recursos identificados por URLs**: `/users`, `/posts`
- ✅ **Stateless**: Cada petición contiene toda la información necesaria
- ✅ **Formato JSON**: Para intercambio de datos
- ✅ **Códigos de estado HTTP apropiados**: 200, 201, 204, 404, 400

## Conceptos Aprendidos

1. **Relación 1 a muchos**: Modelado de relaciones entre entidades
2. **OpenAPI/Swagger**: Documentación estándar de APIs
3. **RESTful design**: Diseño de endpoints siguiendo convenciones REST
4. **Bruno**: Testing de APIs con colecciones organizadas
5. **Verbos HTTP**: Uso apropiado de GET, POST, PUT, DELETE

##  Notas

- Todos los ejemplos usan `https://api.ejemplo.com` como servidor base
- Los IDs en los ejemplos son ilustrativos
- Las fechas siguen el formato ISO 8601
- La relación `userId` en las publicaciones establece la conexión con el usuario

## Referencias

- [OpenAPI Specification](https://swagger.io/specification/)
- [REST API Tutorial](https://restfulapi.net/)
- [Bruno Documentation](https://www.usebruno.com/docs)
- [HTTP Status Codes](https://httpstatuses.com/)

---

**Proyecto desarrollado para el curso de Aplicaciones Web**  
**Universidad:** EPN
**Semestre:** Sexto - 2025-B
