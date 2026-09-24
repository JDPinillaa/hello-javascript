/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i<=20; i++){
    console.log(i);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let sumados = 0;

for (let i = 1; i<=100; i++){
    sumados+=i;
    if (i===100){
        console.log(sumados);
    }
}

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for(let i = 1; i<=50; i++){
    if (i%2 === 0){
        console.log(i);
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let nombres = ["Juan Diego", "Camilo", "Estefa"];

for (let value of nombres){
    console.log(value);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let contador = 0;
let letras = "qwertyuiopasdfghjklzxcvbnm";

for (let value of letras){
    if (value === "a" || value === "e" || value === "i" || value === "o" || value === "u"){
        contador++;
    }
}

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

let aMultiplicar = 1;
let numeros = [2,4,5,7,8,4];

for (let value of numeros){
    aMultiplicar = aMultiplicar*value;
}

console.log(aMultiplicar)


// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i = 1; i<=10; i++){
    console.log("5 x "+ i + " = "+5*i)
}

// 8. Usa un bucle para invertir una cadena de texto

let invertida = [];
for (let value of letras){
    invertida.unshift(value);
}

let cadenaInvertida = invertida.toString()
cadenaInvertida = cadenaInvertida.replaceAll(",", "");
console.log(cadenaInvertida);


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci

let v1 = 0;
let v2 = 1;
let resultadoFibonacci = 0;

for (let i = 0; i<10; i++){
    resultadoFibonacci = v1 + v2
    console.log(v1 + "+" + v2 + "=" + resultadoFibonacci);
    v1 = v2;
    v2 = resultadoFibonacci;
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

let numeros2 = [16, 4, 7, 53, 78, 5];
let resultado = [];

for (let value of numeros2){
    if (value > 10){
        resultado.push(value);
    }
}