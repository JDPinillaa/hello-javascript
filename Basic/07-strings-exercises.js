/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

let nombre = "Juan Diego ";
let apellido = "Pinilla";
let nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

// 2. Muestra la longitud de una cadena de texto

console.log(nombreCompleto.length);

// 3. Muestra el primer y último carácter de un string

console.log("Primer caracter: " + nombreCompleto[0] + " ultimo caracter: " + nombreCompleto[17]);

// 4. Convierte a mayúsculas y minúsculas un string

console.log(nombreCompleto.toUpperCase());
console.log(nombreCompleto.toLowerCase());

// 5. Crea una cadena de texto en varias líneas

let cadenaVariasLineas = `Soy
una
cadena
de
varias
lineas`;

// 6. Interpola el valor de una variable en un string

console.log(`Hola ${nombre}, tu apellido es ${apellido}`);

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let reemplazados = nombreCompleto.replaceAll(" ", "-");
console.log(reemplazados);

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(nombreCompleto.includes("Juan"));

// 9. Comprueba si dos strings son iguales

console.log(nombreCompleto === nombre);

// 10. Comprueba si dos strings tienen la misma longitud

console.log(nombreCompleto.length === nombre.length);