/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array

let arr = ["Hola", "Mundo", "JavaScript"];
let [palabra1, palabra2] = arr;

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let arr2 = [4, 7, 8 , 0, 27];
let [num1, num2, num3, num4, num5, num6 = 0] = arr2

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona = {
    nombre: "Juan Diego",
    edad: 20,
}

let {nombre, edad} = persona

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let {nombre: nombre2, edad: edad2} = persona

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let persona2 = {
    nombre: "Mariana",
    edad: 21,
    carrera: {
        nombreCarrera: "Fisioterapia",
        semestre: 8
    }
}

let {nombre: nombre3, carrera: {nombreCarrera}} = persona2

// 6. Usa propagación para combinar dos arrays en uno nuevo

let miArreglo2 = [1,2,3,4,5]
let miArreglo3 = [6,7,8,9]

let arregloCombinado = [...miArreglo2, ...miArreglo3]

// 7. Usa propagación para crear una copia de un array

let arregloCopia = [...arregloCombinado]

// 8. Usa propagación para combinar dos objetos en uno nuevo

let estudiante = {
    nombre: "Juan Diego",
    edad: 20
}

let carrera = {
    nombreCarrera: "Ingenieria de sistemas",
    semestreActual: "2026-3"
}

let estudianteCompleto = {...estudiante, ...carrera}

// 9. Usa propagación para crear una copia de un objeto

let estudianteCopia = {...estudiante}

// 10. Combina desestructuración y propagación

let arreglazo = [...miArreglo2, ...miArreglo3, ...miArreglo]

let [variablaza01, variablaza02] = arreglazo