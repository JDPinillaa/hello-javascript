/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animales = ["oveja", "cabra", "vaca", "perro", "gato"];

// 2. Añade dos más. Uno al principio y otro al final

animales.push("dinosaurio");
animales.unshift("oso");
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2,1);
console.log(animales);
// 4. Crea un set que almacene cinco libros

let libros = new Set("Metamorfosis", "Habitos atomicos", "Padre rico, padre pobre", "Dracula", "50 años de soledad");

// 5. Añade dos más. Uno de ellos repetido
libros.add("Metamorfosis");
libros.add("El nombre de la rosa");

// 6. Elimina uno concreto a tu elección

libros.delete("Dracula");

// 7. Crea un mapa que asocie el número del mes a su nombre

let mapa = new Map([["Septiembre", "Juan Diego"]]);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

mapa.has("Mayo");

// 9. Añade al mapa una clave con un array que almacene los meses de verano

mapa.set([[["Mayo", "Junio", "Julio"], "Meses de verano"]]);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let miArreglo = ["Hola" , "Mundo"];

let miSet = new Set(miArreglo);

let miMapa = new Map([["lo almacené", miSet]]);

