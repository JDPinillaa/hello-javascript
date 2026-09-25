/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades

let animal = {
    nombre: "Doby",
    tipo: "Perro",
    raza: "Criollo"
}

// 2. Accede y muestra su valor

console.log(animal);
console.log(animal.nombre);
console.log(animal.raza);
console.log(animal.tipo);

// 3. Agrega una nueva propiedad

animal.edad = 18;

// 4. Elimina una de las 3 primeras propiedades

delete animal.edad;

// 5. Agrega una función e invócala

function animal(nombre, tipo, raza){
    this.nombre = nombre;
    this.tipo = tipo;
    this.raza = raza;
}

let doby = new animal("Doby", "Perro", "Criollo");

// 6. Itera las propiedades del objeto

for (let value in animal){
    console.log(value);
}

// 7. Crea un objeto anidado

let carro = {
    marca: "Mazda",
    modelo: "CX-50",
    anio: "2027",

    uso: {
        kilometraje: 2400,
        nivelCombustible: "normal",
        estadoFrenos: "nuevos"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(carro.uso.kilometraje);
console.log(carro.uso.nivelCombustible);
console.log(carro.uso.estadoFrenos);

// 9. Comprueba si los dos objetos creados son iguales

console.log(carro === animal);

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(carro.marca === animal.nombre);