console.log("Hello World!");

//Variables
var numero = 20; //Var es una variable global
console.log("Mi edad es " + numero);
numero = 21;
console.log("Mi edad ahora es " + numero);

let variableLet = "Hola"; //Let es una variable de bloque
const constante = 30; //Const es una variable que no puede cambiar su valor
console.log(constante);

var resultado = 2 + 2;
console.log("El resultado es " + resultado);
var op1 = 2;
var op2 = 3;
var resultado2 = op1 + op2;
console.log("El resultado de la suma es " + resultado2);

//Condiciones
let miNumero = 6
if (miNumero == 6){ //Si lleva tres = se compara igual el tipo de variable, si lleva dos = se compara el valor sin importar el tipo de variable
    console.log("Si, mi numero vale 6");
}else{
    console.log("No, mi numero no vale 6"); 
}

let num = -5
if (num > 0){
    console.log("El numero es positivo");
}else if (num === 0){
    console.log("El numero es cero");
}else{
    console.log("El numero es negativo");
}

//Bucles
let i = 0
while (i < 5){
    console.log(i)
    i = i + 1

}

/* for(let i = 0; i < 10; i = i++){ //Contador ascendente
    console.log(i)
}

/* for(let i = 10; i >= 0; i = i--){ //Contador descendente
    console.log(i)
} */

//Funciones
function saludar(){
    console.log("Hola ");
}

saludar();

function despedida(nombre){
    console.log("Adios " + nombre);
}
despedida("Juan");

function persona(nombre, edad){
    console.log("Mi nombre es " + nombre + " y tengo " + edad + " años");
}
persona("Juan", 25);

function suma(a, b){
    return a + b;
}
console.log(suma(5, 3));

//Arreglos
let arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);
let miArray = [1,2,3]
for(let i = 0; i < miArray.length; i++){
    console.log(miArray[i]);
}

//Objetos - Son estructuras de datos que permiten almacenar información en pares clave-valor
let objeto = {
    llave : "valor",
}

let persona1 = {
    nombre: "Juan",
    edad: 25,
}

/* console.log(persona1);
console.log(persona1.edad); */

let arrayObejtos = [objeto, persona1]
persona1.comidaFavorita = "Pizza";

