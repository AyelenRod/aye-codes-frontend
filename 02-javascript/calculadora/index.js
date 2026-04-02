console.log("Script conectado exitosamente")

//Primero declaramos las constantes para obtener los elementos del DOM
const txtNum1 = document.getElementById("num1");
const txtOperador = document.getElementById("operador");
const txtNum2 = document.getElementById("num2");
const btnCalcular = document.getElementById("calcular");
const pResultado = document.getElementById("resultado");

//Luego, agregamos un event listener al botón para que ejecute la función calcular cuando se haga click
btnCalcular.addEventListener("click", calcular);


//Finalmente, creamos la función calcular que se encargará de realizar la operación matemática según el operador ingresado
function calcular(){
    /* console.log("Funcionando") */
  /*   console.log(txtOperador.value) */
    
    //Obtenemos los valores de los inputs (texto) y los convertimos a números usando parseFloat
    const operador = txtOperador.value
    const Num1 = parseFloat(txtNum1.value)
    const Num2 = parseFloat(txtNum2.value)

    if(operador == "+" || operador == "-" || operador == "*" || operador == "/" || !isNaN(Num1) && !isNaN(Num2)){
        let resultado
        switch (operador){
            case "+":
                resultado = Num1 + Num2 
                break;
            case "-":
                resultado = Num1 - Num2
                break;
            case "*":
                resultado = Num1 * Num2
                break;
            case "/":
                resultado = Num1 / Num2
                break;
        }
        pResultado.innerText = "=" + resultado
    }else{
        pResultado.innerText = "Operador no valido"
    }
}

