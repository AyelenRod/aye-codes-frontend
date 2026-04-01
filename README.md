#Journey Frontend - Ayelen
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

# 🎨 Bitácora de Aprendizaje - Marzo 2026

## 📝 Sesión: 31-03-2026
**Enfoque:** Fundamentos de CSS (Cascading Style Sheets)  
**Recurso:** [Curso de CSS - Canal HolaMundo](https://www.youtube.com/@HolaMundoDev)

### 🚀 Resumen del día
Hoy completé el módulo de CSS básico. Aprendí a separar la estructura (HTML) del diseño, aplicando estilos globales y específicos. El ejercicio final consistió en transformar el blog básico de HTML en un sitio visualmente atractivo.

### 🛠️ Conceptos Practicados
* **Carga de Estilos:** Uso de la etiqueta `<link>` para archivos externos (la mejor práctica).
* **Selectores:** Selección por etiqueta, clase (`.`) e ID (`#`).
* **Box Model:** Control de `content`, `padding`, `border` y `margin`.
* **Diseño:** Propiedades de `background`, colores (Hex, RGB), y manejo de `display` (block, inline, inline-block).
* **Listas y Tablas:** Personalización de viñetas y bordes colapsados.

---

## 🧠 Notas Personales: Conceptos Clave de CSS

### 1. `Margin` vs `Padding` (El Box Model)
* **`Padding` (Relleno):** Es el espacio **interno**. Empuja el contenido hacia adentro, alejándolo del borde del propio elemento. Afecta el tamaño del elemento si tiene un color de fondo.
* **`Margin` (Margen):** Es el espacio **externo**. Crea separación entre el elemento actual y sus vecinos. No afecta el interior de la "caja".

### 2. `Display: Block` vs `Inline` vs `Inline-block`
* **`block`:** Ocupa **todo el ancho** disponible (como un `<div>` o `<h1>`). Empieza siempre en una línea nueva.
* **`inline`:** Solo ocupa el ancho de su contenido (como un `<span>` o `<a>`). No permite cambiar el ancho (`width`) ni el alto (`height`).
* **`inline-block`:** Lo mejor de ambos mundos. Se alinea en fila como un `inline`, pero permite modificar su tamaño como un `block`.

### 3. Unidades: `px` vs `em` vs `rem`
* **`px` (Píxeles):** Unidad absoluta y fija. No cambia si el usuario escala la fuente del navegador.
* **`em`:** Unidad relativa al tamaño de fuente del **padre**. Puede ser difícil de calcular si se anidan muchos elementos.
* **`rem` (Root EM):** Unidad relativa al tamaño de fuente de la **raíz** (`<html>`). Es la más recomendada para accesibilidad y diseño responsivo.

### 4. `Color` vs `Background-color`
* **`color`:** Cambia el color del **texto** e iconos.
* **`background-color`:** Cambia el color del **fondo** del contenedor.

---

> **💡 Tip de oro:** Siempre usa `box-sizing: border-box;` en tu CSS global. Esto hace que el `padding` y el `border` no aumenten el tamaño total de la caja, evitando que tus diseños se "rompan" inesperadamente.