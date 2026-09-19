/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Juan Diego";
if (nombre == "Juan Diego"){
    console.log(nombre);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "juand";
let contrasenia = "qwerty";

if(usuario == "juand" && contrasenia == "qwerty"){
    console.log("Usuario y contraseña correctos");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let numero = 5;

if (numero >=1){
    console.log("El numero es positivo");
}
else if (numero == 0){
    console.log("El numero es 0");
}
else{
    console.log("El numero es negativo")
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 17;

if(edad >=18) {
    console.log("Es adulto, puede votar");
}
else{
    console.log(`Es menor, aun le faltan ${18-edad} años para poder votar`);
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let esAdulto = edad > 18 ? "adulto" : "menor";
console.log(esAdulto)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let mes = 11;

if (mes == 9 ||mes == 10||mes == 11 || mes == 12){
    console.log("Invierno");
}
else if(mes == 1 || mes==2 || mes==3 || mes == 4 ||mes==5){
    console.log("primavera");
}

else if (mes == 6 || mes == 7 || mes ==8){
    console.log("verano");
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let month = "febrero";

month == febrero ? console.log("28 dias") : console.log("30 o 31 dias");

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "ingles"

switch (idioma){
    case "ingles":
        console.log("Hello")
        break

    case "espaniol":
        console.log("Hola")
        break

    case "frances":
        console.log("Salut")
        break

    case "italiano":
        console.log("Ciao")
}
