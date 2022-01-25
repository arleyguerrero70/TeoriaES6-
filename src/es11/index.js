// Dynamic import - Llamado  
// Llamar piexas de código para hacer
// más ágil el llamado
// Esta función muestra en consola un hola mundo al hacer
// click en el boton del index.html
const button = document.getElementById("btn");

button.addEventListener("click", async function(){
    const module = await import("./file.js");
    module.hello();
});

// trabajr con numeros BigInt
// número potenciado de 2 a la 53

const bigNumber = 9007199254740991n; /**actvando bigInt con la mayor version permitida version anterior */
const anotherBigInt = BigInt(9007199254740991);/** Activando BigInt con la nueva versión */

console.log(bigNumber);
console.log(anotherBigInt);

// Promise.allSettled([])
// Nos devuelve una promesa despues de que todas las promesas
// se hayan cumplido o rechazado en una serie de objetos

const promiseOne = new Promise((resolve,reject)=> reject('Reject'));
const promiseTwo = new Promise((resolve,reject)=> resolve('Resolve'));
const promiseThree = new Promise((resolve,reject)=> resolve('Resolve Three'));

// La diferencia entre Promise.all va a ser rechazada
// en el momento que se rechace una de estas promesas
// mientras que Promise.allSettled no le importa el estado
// de las promesas, las ejecuta todas y nos da la respuesta

Promise.allSettled([promiseOne, promiseTwo, promiseThree])
    .then(response => console.log(response))
//

//Asignar una valor por defecto si vamos a manejar un valor null
const foo = null ?? 'defasul string';
console.log()

// optional
const user = {};
console.log(user?.profile?.email); /** Como el valor que buscamos no existe lo convierte en undefined */

if(user?.profile?.email){
    console.log('email');
}else{
    console.log('fail');
}
