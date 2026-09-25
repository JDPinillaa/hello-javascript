/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function suma(n1 = 0, n2 = 0){
    return n1 + n2;
}

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function mayor(numeros = []){
    let nMayor = 0;
    for (let value of numeros){
        if (value>nMayor){
            nMayor = value;
        }
    }

    return nMayor;

}

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function vocales(cadena = ""){
    let contador = 0;
    for (let i = 0; i<cadena.length; i++){
        if (cadena[i] === "a" || cadena[i] === "e" || cadena[i] === "i" || cadena[i] === "o" || cadena[i] === "u"){
            contador++;
        }
    }

    return contador;
}

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function aUpperCase(arreglo = [""]){
    for (let value of arreglo){
        value.toUpperCase();
    }

    return arreglo;
}

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function primo(num = 0){
    if (num%2 === 0){
        return false;
    }
    if (num > 1){
        if (num%1 === 0 && num%num === 0){
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function comunes(arr1 = [], arr2 = []){
    let arrComunes = [];
    for (let value of arr1){
        if (arr2.includes(value)){
            arrComunes.push(value);
        }
    }

    for (let value of arr2){
        if (arr1.includes(value)){
            if (!(arrComunes.includes(value))){
                arrComunes.push(value);
            }
        }
    }

    return arrComunes;
}

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumarPares(arr = [0]){
    let total = 0;
    for (let value of arr){
        if(value%2 === 0){
            total += value;
        }
    }

    return total;
}

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function alCuadrado(arr = [0]){
    let arrCuadrado = [];
    for (let value of arr){
        arrCuadrado.push(value**2)
    }
    return arrCuadrado;
}

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function invertir(cadena =""){
    let cadenas = cadena.split(" ");
    let invertidas= [];
    for (let value of cadenas){
        let invertida = [];
        for (let v of value){
            invertida.unshift(v)
        }
        invertida.push(" ");
        invertidas.push(invertida);
    }
    let cadenaInv = invertidas.toString();
    let cadenaLista = cadenaInv.replaceAll(",", "");
    return cadenaLista;
}

// 10. Crea una función que calcule el factorial de un número dado

function factorial(num = 0){
    if (num === 0){
        return null;
    }
    let resultado = 1;
    for (let i = 1; i<=num; i++){
        resultado = i*resultado;
    }
    return resultado;
}

