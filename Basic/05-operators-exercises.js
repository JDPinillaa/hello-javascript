/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

    let n1 = 5+3;
    let n2 = 7-1;
    let n3 = 5*2;
    let n4 = 8/2;

    let n5 = 9%2;
    let n6 = 2**2;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

    let a1 = n5+=2;
    let a2 = n1-=n5;
    let a3 = n6*=n4;
    let a4 = n1/=n5;
    let a5 = n6 %=2;
    let a6 = n4 **=2;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

    console.log(n1>n5);
    console.log(4>=n4);
    console.log(8!==n6);
    console.log(n2==6);
    console.log(n3 === 10);


// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

    console.log(1>50);
    console.log(15<=3);
    console.log(4 !== 4);
    console.log(7 === 8);
    console.log(2<1);

// 5. Utiliza el operador lógico and

    console.log(4>3 && 7<8);

// 6. Utiliza el operador lógico or

    console.log(5<=4 || 7>1);

// 7. Combina ambos operadores lógicos

    console.log(5>4 && 8>1 || 7<3)

// 8. Añade alguna negación

console.log(!(5<=4 || 7>1));


// 9. Utiliza el operador ternario

let isTrue = true;
isTrue ? console.log("Soy verdadero") : console.log("Soy falso");

// 10. Combina operadores aritméticos, de comparáción y lógicas

console.log((1+4 > 2-1)||(8 !== 5));