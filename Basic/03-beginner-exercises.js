/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

//Esto es un comentario de una línea

// 2. Escribe un comentario en varias líneas

/*
Esto es un comentario de varias líneas
 */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

    let numero = 1;
    let caracter = 'h';
    let decimal = 1.15;
    let booleano = false;
    let nulo = null;
    let simbolo = Symbol("soy unico")
    let granEntero = 39859385395888398593892898520n


// 4. Imprime por consola el valor de todas las variables
    console.log(numero);
    console.log(caracter);
    console.log(decimal);
    console.log(booleano);
    console.log(nulo);
    console.log(simbolo);
    console.log(granEntero);


// 5. Imprime por consola el tipo de todas las variables
    console.log(typeof(numero));
    console.log(typeof(caracter));
    console.log(typeof(decimal));
    console.log(typeof(booleano));
    console.log(typeof(nulo));
    console.log(typeof(simbolo));
    console.log(typeof(granEntero));

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
    numero = 5;
    caracter = 'c';
    decimal = 5.20;
    booleano = true;
    simbolo = Symbol("tambien soy unico")
    granEntero = 45453487378784775873794748384733333n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
    numero = 34.6;
    caracter = 7686767676896696877878767876976777n;
    decimal = 5;
    booleano = null;
    simbolo = "vvvvvvvvv";
    granEntero = true;



// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

    const num = 5;
    const dec = 7.4;
    const char = 'v';
    const bool = false;
    const nul = null;
    const sim = Symbol("Soy unico y ocnstante");
    const grande = 34243434234332424334234324342343n



// 9. A continuación, modifica los valores de las constantes

    //no se puede, son constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

/*
at ModuleJob.run (node:internal/modules/esm/module_job:437:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:642:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

 */