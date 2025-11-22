
# Ejemplo: SVG interactivo (implementación)

Este directorio contiene un ejemplo práctico del estándar **SVG** aplicado en una página web.

- Archivo principal: `index.html` — muestra tres íconos SVG interactivos (Tema, Me gusta, Zoom).

**Qué implementé:**
- Uso de elementos SVG inline con `title` y `desc` para accesibilidad.
- Asigné `role="button"` y `tabindex="0"` para que los SVG sean accesibles por teclado.
- Soporte de activación por teclado (Enter y Barra espaciadora) y por clic.
- Uso de `aria-pressed` para indicar estados (ej. botón "Me gusta").
- Mensajes en `aria-live` (`div#log`) para darle retroalimentación a tecnologías asistivas.

**Cómo probarlo:**
1. Abre `index.html` en tu navegador (doble clic o `Archivo -> Abrir`).
2. Navega con Tab hasta los íconos y presiona Enter o Espacio para activarlos.
3. Observa los cambios visuales y la retroalimentación en el texto bajo los íconos.

**Notas sobre accesibilidad:**
- `title` y `desc` dentro del SVG permiten que lectores de pantalla describan la imagen.
- `role="button"` y `aria-pressed` ayudan a que el comportamiento sea claro para AT (assistive technology).
- `aria-live="polite"` proporciona retroalimentación sin interrumpir la navegación.

**Aprendizajes:**
- SVG inline permite combinar gráficos vectoriales con comportamiento interactivo y accesible.
- Es importante probar con teclado y con lectores de pantalla para verificar la experiencia.
