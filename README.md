# 📅 Bitácora de Aprendizaje - Marzo 2026

## 📝 Sesión: 30-03-2026
**Enfoque:** Repaso de Fundamentos de HTML5  
**Recurso:** [Curso de HTML - Canal HolaMundo](https://www.youtube.com/@HolaMundoDev)

### 🚀 Resumen del día
Hoy realicé un repaso intensivo de las bases de la web. Aunque parecen conceptos sencillos, dominarlos es fundamental antes de saltar a CSS y JavaScript. El contenido se centró en la estructura semántica y elementos interactivos.

### 🛠️ Conceptos Practicados
* **Encabezados (`<h1>` - `<h6>`):** Jerarquía y SEO.
* **Multimedia y Enlaces:** Uso de `<a>` para navegación e `<img>` con atributos `alt` correctos.
* **Formularios:** Estructura de `<form>`, `<input>`, `<label>` y tipos de datos.
* **Botones:** Diferencias entre botones de envío y de acción.
* **Listas:** Organización de datos con `<ul>`, `<ol>` y `<li>`.
* **Tablas:** Maquetación de datos tabulares con `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>` y `<td>`.

### 🏗️ Proyecto del Día: Mini Blog
Para finalizar la sesión, integré todos los elementos anteriores en un **ejemplo de Blog**.  
* **Estructura:** Títulos para entradas, imágenes con enlaces, una tabla de contenidos y un formulario de contacto al final.

---

> **Nota personal:** Recordar siempre la importancia de la semántica. No usar un `<div>` cuando un `<button>` o una `<table>` son los elementos correctos para la accesibilidad. 

# 📚 Notas de Aprendizaje: Conceptos Clave de HTML

En esta sección detallo las diferencias fundamentales que todo desarrollador debe dominar para escribir código limpio, semántico y funcional.

---

## 🏗️ 1. Diferencia entre `<div>` y `<section>`
La diferencia principal es la **Semántica** (el significado que le damos al navegador y buscadores).

| Elemento | Uso Principal | ¿Tiene significado? |
| :--- | :--- | :--- |
| **`<div>`** | Contenedor genérico. Se usa para agrupar elementos y aplicar estilos (CSS) o diseño (Flexbox/Grid). | **No.** Es solo una "caja" vacía. |
| **`<section>`** | Agrupa contenido relacionado que tiene una temática propia. | **Sí.** Indica que el contenido interno es una sección lógica del sitio. |

> **💡 Regla de oro:** Si tu grupo de elementos necesita un encabezado (`<h2>`, `<h3>`), usa `<section>`. Si solo lo usas para centrar algo o poner un fondo, usa `<div>`.

---

## 📡 2. Diferencia entre `GET` y `POST` (Formularios)
Define cómo viaja la información desde el navegador hacia el servidor.

* **`GET` (Obtener):**
    * Envía los datos a través de la **URL** (ej: `busqueda.php?nombre=juan`).
    * **Uso:** Para búsquedas, filtros o cuando el usuario quiere compartir un enlace con resultados.
    * **Limitación:** Los datos son visibles para todos y tienen un límite de caracteres.
* **`POST` (Enviar):**
    * Envía los datos de forma oculta en el **cuerpo de la petición HTTP**.
    * **Uso:** Para enviar contraseñas, crear usuarios, procesar pagos o subir archivos.
    * **Ventaja:** Es más seguro (no se queda en el historial) y no tiene límite de tamaño.

---

## 🆔 3. Diferencia entre `class` y `id`
Ambos sirven para identificar elementos, pero tienen reglas de uso distintas.

* **`class` (Clase):**
    * Es **reutilizable**. Muchos elementos pueden compartir la misma clase (ej: `.boton-rojo`).
    * Un solo elemento puede tener varias clases (ej: `<div class="card dark-mode">`).
* **`id` (Identidad):**
    * Es **único**. Solo debe existir un ID con ese nombre en todo el documento HTML.
    * Se usa principalmente para:
        1.  Anclas de navegación (ir a una parte de la página).
        2.  Vincular un `<label>` con un `<input>`.
        3.  Manipular un elemento específico desde JavaScript.
        
---

## 🔑 4. Otras Diferencias Clave
* **`<a>` vs `<button>`:** Usa `<a>` para **cambiar de página** o ir a un link. Usa `<button>` para **ejecutar una acción** (abrir un menú, enviar un formulario, borrar un item).
* **`<ul>` vs `<ol>`:** Ambas son listas (`<li>`). `<ul>` es desordenada (puntos/bullets) y `<ol>` es ordenada (1, 2, 3...).
* **Atributo `alt` en imágenes:** No es solo para cuando falla la imagen; es vital para que las personas ciegas que usan lectores de pantalla sepan qué hay en la foto (Accesibilidad).