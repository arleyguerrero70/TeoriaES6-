// Actualización en ES7 -> INCLUDE
// Vamos a validar sin dentro de este array
// se encuentra X valor
// (en este caso el #7) y que hago algo

let numbers = [1,3,5,7,9];

if (numbers.includes(7)){
    console.log('Si se encuentra el valor buscado');
}else{
    console.log('No se encuentra el valor buscado');
}


// ¿Cómo elevar a la potencia?
// vamos a agregar el operador **
// con esto indicamos de forma facil que queremos realizar
// la potencia de x números

let base = 4;
let exponent = 3;
let result = base ** exponent;
console.log(result);
