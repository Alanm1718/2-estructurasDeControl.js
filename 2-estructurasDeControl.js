// estructurasDeControl.js

// Ejercicio 1: Condicionales if-else
// Instrucción: Escribe una función que reciba un número y verifique si es par o impar.
// Imprime "El número es par" o "El número es impar" según corresponda.
function verificarParImpar(numero) {
    console.log(numero % 2 === 0 ? "El número es par" : "El número es impar");
}
verificarParImpar(4);  // par
verificarParImpar(7);  // impar




// Ejercicio 2: Condicionales anidados
// Instrucción: Escribe una función que reciba una edad y determine si la persona es:
// "Menor de edad" (menor a 18), "Adulto" (entre 18 y 65), o "Adulto mayor" (mayor a 65).
function clasificarEdad(edad) {
    if (edad < 18) {
        return "Menor de edad";
    } else if (edad >= 18 && edad <= 65) {
        return "Adulto";
    } else {
        return "Adulto mayor";
    }
}


console.log(clasificarEdad(17));  
console.log(clasificarEdad(30)); 
console.log(clasificarEdad(65));  
console.log(clasificarEdad(70));  

// Ejercicio 3: Bucles while
// Instrucción: Crea una función que reciba un número entero positivo y utilice un bucle `while` para imprimir todos los números desde ese número hasta 0.
  function cuentaRegresiva(numero) {
    // Verificar que el número es entero positivo
    if (numero < 0 || !Number.isInteger(numero)) {
        console.log("Por favor, ingresa un número entero positivo.");
        return;
    }

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }
}


cuentaRegresiva(5);  // Salida: 5, 4, 3, 2, 1, 0
cuentaRegresiva(3);  // Salida: 3, 2, 1, 0
cuentaRegresiva(-1); // Salida: Por favor, ingresa un número entero positivo.
cuentaRegresiva(10); // Salida: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0



// Ejercicio 4: Bucles do-while
// Instrucción: Escribe una función que imprima "Estoy aprendiendo JavaScript" 5 veces utilizando un bucle `do-while`.
function repetirMensaje() {
    let contador = 0;
    do{
        console.log("Estoy aprendiedo javascript");
        contador++;
    } while (contador <5);
}

// Ejercicio 5: Bucle for
// Instrucción: Escribe una función que reciba un número entero positivo y utilice un bucle `for` para imprimir todos los números pares entre 0 y ese número.
function imprimirPares(numero) {
     for(let i =0; i <= numero; i++){
        if (i % 2 === 0){
            console.log(i);
        }
     }
}

// Ejercicio 6: Uso de break
// Instrucción: Escribe una función que recorra los números del 1 al 10, pero detén el bucle cuando el número sea igual a 6.
function detenerEnSeis() {
    for(let i = 1; i <= 10; i++){
        if(i === 6){
            break;
        }
        console.log(i);
    }
}

// Ejercicio 7: Uso de continue
// Instrucción: Crea una función que recorra los números del 1 al 10, pero que se salte el número 5 usando `continue`.
function saltarCinco() {
    for (let i = 1; i <=10; i++){
        if(i === 5){
            continue;
        }
        console.log(i);
    }
}

// Ejercicio 8: Switch básico
// Instrucción: Escribe una función que reciba un número del 1 al 7 y devuelva el día de la semana correspondiente (1 es "Lunes", 2 es "Martes", ..., 7 es "Domingo"). Usa la estructura `switch`.
function obtenerDiaSemana(dia) {
    switch(dia){
        case 1: console.log("Lunes"); break;
        case 2: console.log("Martes"); break;
        case 3: console.log("Miercoles"); break;
        case 4: console.log("Jueves"); break;
        case 5: console.log("Viernes"); break;
        case 6: console.log("Sabado"); break;
        case 7: console.log("Domingo"); break;
        case 8: console.log("Dia invalido"); break;
    }
}

// Ejercicio 9: Switch con múltiples casos
// Instrucción: Escribe una función que reciba un carácter y devuelva si es una vocal. Utiliza un `switch` y agrupa los casos para las vocales (a, e, i, o, u).
function esVocal(letra) {
    switch(letra.tolowerCase()){
        case 'a':
            case 'e':
                case 'i':
                    case 'o':
                        case 'u':
                            console.log("Es vocal");
                            break;
                            default:
                                console.log("No es vocal");
        }
}

// Ejercicio 10: Condicionales complejos con operadores lógicos
// Instrucción: Escribe una función que reciba tres números y determine si todos son positivos, al menos uno es negativo, o todos son negativos. Usa operadores lógicos (`&&`, `||`).
function  verificarParidad(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        console.log("Todos son positivos");
    } else if (a < 0 && b < 0 && c < 0) {
        console.log("Todos son negativos");
    } else if (a < 0 || b < 0 || c < 0) {
        console.log("Al menos uno es negativo");
    } else {
        console.log("Hay una mezcla de positivos y negativos");
    }
}
// RESULTADOS...
verificarParidad(1, 2, 3);   // Todos son positivos
verificarParidad(-1, -2, -3); // Todos son negativos
verificarParidad(-1, 2, 3);   // Al menos uno es negativo
verificarParidad(1, -2, 0);    // Hay una mezcla de positivos y negativos

export {
    verificarParidad,
    clasificarEdad,
    cuentaRegresiva,
    repetirMensaje,
    imprimirPares,
    detenerEnSeis,
    saltarCinco,
    obtenerDiaSemana,
    esVocal,
    evaluarNumeros,
};
