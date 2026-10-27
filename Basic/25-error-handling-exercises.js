/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch

try{
    console.log(dhfjdhfdshdhjhhueeihjkshdjhsfhj)
} catch (error){
    console.log("Se produjo un error")
}

// 2. Captura una excepción utilizando try-catch y finally

try{
    console.log(dhfjdhfdshdhjhhueeihjkshdjhsfhj)
} catch (error){
    console.log("Se produjo un error")
} finally{
    console.log("Ejecucion finalizada")
}


// 3. Lanza una excepción genérica

//try{
//    console.log(dhfjdhfdshdhjhhueeihjkshdjhsfhj)
//} catch (error){
//    throw new TypeError("Error de tipo")
//}


// 4. Crea una excepción personalizada

class miExcepcion extends Error{
    mensaje
    constructor(mensaje) {
        super();
        this.mensaje = mensaje
    }
}

// 5. Lanza una excepción personalizada

function revisarTipoCadena (variable) {
    if (!(typeof variable === "string")){
        throw new miExcepcion("El tipo no es string")
    }
}


// 6. Lanza varias excepciones según una lógica definida


function divisionDeEnteros(a , b){
    if(!(Number.isInteger(a)) || !(Number.isInteger())){
        throw new TypeError("Los numeros deben ser enteros")
    }

    if(b === 0){
        throw new SyntaxError("No se puede hacer division por 0")
    }

    return a/b
}


// 7. Captura varias excepciones en un mismo try-catch

try{
    divisionDeEnteros(2.5, 0)
} catch (error){
    if (error instanceof TypeError){
        console.log("Se produjo un error de tipo: ", error.message)
    }
    else if(error instanceof SyntaxError){
        console.log("Se produjo un error de sintaxis: ", error.message)
    }
}

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

let arregloPrueba = ['c', 2, "Hola mundo", null]

function floatParser(a){
    if(typeof a !== "object"){
        throw new TypeError("El parametro necesita ser iterable")
    }
    for(let c of a){
        try{
            Number.parseFloat(c)
            if(typeof c !== "number"){
                throw new TypeError("Para parsearse a float se debe ser numero")
            }
        } catch (error){
            console.log("ocurrio un error en el parseo: ", error)
        } finally{
            console.log("La operacion termino")
        }
    }
}




// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

class faltaDePropiedadError extends Error{
    constructor(message) {
        super(message);
    }
}

function tieneEdad(a){
    if(typeof a !== "object"){
        throw new TypeError("La funcion solo recibe objetos")
    }

    else if(!(edad in a)){
        throw new faltaDePropiedadError("El objeto no tiene edad")
    }

    else{
        return true
    }

}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10


let arregloPrueba2 = [2,'t',"Hola mundo", 4, 5, 10, 8, 7, 9, 7, 0]
let arregloPrueba3 = [0,1,23,90,4,5,6,7,8]


/*
    funcion que revisa un arreglo en 10 de sus casillas hasta que un elemento sea el numero 0
 */
function rectificar0(a){
    for(let i = 0; i<10; i++){
        try {
            if (a[i] === 0) {
                break
            }
            else {
                throw new Error("El valor no es 0")
            }
        } catch (error){
            console.log(`El valor ${i} del arreglo no es 0`)
        }

        finally {
            console.log(`iteracion ${i+1}`)
        }
    }
}

rectificar0(arregloPrueba3)
rectificar0(arregloPrueba2)