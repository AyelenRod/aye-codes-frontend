# 🧠 Bitácora de Aprendizaje - JavaScript

## 📝 Sesión: 01-04-2026
**Enfoque:** Fundamentos de Lógica y Sintaxis  
**Recurso:** [Aprende Javascript en 60 minutos - Canal Deivchoi](https://www.youtube.com/@deivchoi)

### 🚀 Resumen del día
Hoy aprendí a darle "cerebro" a mis páginas web. Pasé de la maquetación estática a la creación de lógica funcional. El mayor logro fue unir HTML, CSS y JS para hacer que una calculadora realice operaciones reales.

### 🛠️ Conceptos Practicados
* **Variables (`let`, `const`):** Contenedores de información.
* **Condicionales (`if/else`):** Toma de decisiones basada en datos.
* **Bucles (`for`, `while`):** Automatización de tareas repetitivas.
* **Funciones:** Bloques de código que ejecutan acciones específicas.
* **Arreglos y Objetos:** Formas de organizar listas y datos complejos.

---

## 🧠 Notas Personales: Conceptos Clave

### 1. `const` vs `let`
* **`const`**: Para valores que no cambian (como una configuración o el nombre de una función).
* **`let`**: Para valores que van a variar (como el resultado de una suma o un contador).

### 2. Tipos de Datos
* **Primitivos**: String (texto), Number (números), Boolean (true/false).
* **Colecciones**: 
    * **Arrays `[]`**: Listas ordenadas.
    * **Objetos `{}`**: Conjuntos de clave-valor (ej: `{ color: "rojo", precio: 10 }`).



### 3. Funciones de Flecha (Arrow Functions)
Es la forma moderna de escribir funciones. Son más cortas y se usan mucho en React.
`const miFuncion = () => { console.log("Hola"); }`

### 4. `==` vs `===`
* **`==`**: Compara solo el valor (evítalo).
* **`===`**: Compara valor **y tipo de dato**. Es el estándar de la industria.

---

> **💡 Nota de proyecto:** En la calculadora aprendí que los valores que vienen de un `input` en HTML siempre llegan como **texto**. Tuve que usar `Number()` o `parseInt()` para poder sumarlos.