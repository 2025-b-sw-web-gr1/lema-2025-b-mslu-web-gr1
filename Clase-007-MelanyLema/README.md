# README — Taller Clase 007: Motor de Renderizado (Pug)
## Arctic Monkeys — Sitio de ejemplo (Express + Pug)

**Taller Clase 007 – Motor de Renderizado: Pug**

Este proyecto forma parte del taller de la Clase 007. El objetivo fue crear una página web usando un motor de renderizado distinto a EJS, configurar Express para usarlo y presentar una página funcional renderizada desde el servidor.

Para este ejercicio se utilizó Node.js + Express + Pug.

### 1) ¿Qué es un motor de renderizado?

Un motor de renderizado toma plantillas (archivos con estructura simplificada) y datos dinámicos para generar HTML final que se envía al navegador.

En pocas palabras:

Plantilla (Pug) + Datos (app.js) → HTML final (lo que ve el usuario)

Esto evita escribir HTML repetitivo y facilita la separación entre estructura (plantillas) y datos (servidor).

### 2) Motor elegido: Pug

Elegí Pug por su sintaxis compacta y la integración nativa con Express. Pug permite escribir vistas con indentación y bloques reutilizables.

**Por qué Pug:**
- Sintaxis más corta y limpia que HTML tradicional.
- Facilita layouts y bloques reutilizables.
- Se integra sin complicaciones con Express.

### 3) Diferencias resumidas entre Pug y EJS

Característica | EJS | Pug
--- | --- | ---
Sintaxis | HTML tradicional con etiquetas | Basado en indentación, sin etiquetas de cierre
Variables | `<%= variable %>` | `#{variable}` o `= variable`
Organización | Más manual (incluir partials) | `extends`, `block`, layouts más sencillos
Curva de aprendizaje | Familiar para HTML | Requiere acostumbrarse a la indentación
Legibilidad | HTML explícito | Código más compacto

### 4) Ventajas y desventajas encontradas

**Ventajas**
- Código más corto y fácil de mantener.
- Permite crear layouts reutilizables.
- Integración sencilla con Express.
- Buen manejo de estructuras como bucles y condicionales.

**Desventajas**
- Sintaxis basada en indentación (puede confundir al inicio).
- Si la indentación se rompe, la plantilla no renderiza.

### 5) ¿Qué se construyó en este proyecto?

Se creó una página informativa sobre la banda Arctic Monkeys con las siguientes secciones (todas dentro de `views/index.pug`):
- Inicio: título, imagen hero y breve introducción.
- Canciones más escuchadas: lista / cards con año, álbum y descripción.
- Álbumes: grid con portada, año, descripción y clase CSS para cada álbum.
- Historia de la banda: resumen de inicios, ascenso y evolución musical.
- Eventos importantes / Conciertos: timeline con año, lugar y descripción.

Los datos se entregan desde `app.js` como objeto embebido y se renderizan dinámicamente en la vista Pug.

### 6) Tecnologías utilizadas

- Node.js
- Express
- Pug
- HTML generado dinámicamente por Pug
- CSS embebido en la plantilla principal

### 7) Estructura del proyecto (resumen)

Clase-007-MelanyLema/
├── app.js                → Servidor Express y datos embebidos
├── package.json          → Configuración del proyecto y script `start`
├── package-lock.json     → Lockfile de dependencias
├── views/
│   └── index.pug         → Plantilla Pug principal con todas las secciones
└── public/
	└── images/           → Imágenes locales (SVG) usadas como placeholders

### 8) ¿Cómo correr el proyecto? (PowerShell — Windows)

1. Situarse en la carpeta del proyecto:
```powershell
cd "Clase-007-MelanyLema"
```
2. Instalar dependencias (si no están instaladas):
```powershell
npm install
```
3. Ejecutar el servidor:
```powershell
npm start
# o
node app.js
```
Si el puerto 3000 está en uso:
```powershell
$env:PORT=3001; npm start
```
Abrir en el navegador: `http://localhost:3000` (o el puerto que hayas elegido).

### 9) Resultado final

El proyecto renderiza correctamente una página web usando Pug y cumple los objetivos del taller:
- Usar un motor distinto a EJS
- Configurar Express con Pug
- Enviar datos desde `app.js` a la vista Pug
- Construir una página funcional con secciones dinámicas