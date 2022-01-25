// replaced.ALL
// una de las funciones utiles de esta funcion
// es detectar palabras indebidas para convertirlas en
// asterisco y evitar insultos o palarbas despectivas
const string = 'JavaScript es maravilloso, con JavaScript creo el furturo de la web';
const replacedString = string.replace("JavaScript", "Python");/** Solo remplaza la primera palabra que coincide */
console.log(replacedString);
const replaceAlldString = string.replaceAll("JavaScript", "Python");/** Solo remplaza la primera palabra que coincide */
console.log(replaceAlldString);


// Metodos privados para usar en las clases
// Vamos a crear una clase con un metodo interno
// para acceder a él

class Message{
    #show(val){ /** Agregando el "#"  se convierte en un valor privado*/
        console.log(val);
    }
}
const message = new Message();
message.show("Holiii");

// Promise Any
// Es un objeto global
// cuyo argumento es la forma de un array de promesas
// capturando la primera respuesta satisfactorio

const promiseES12one = new Promise((resolve, reject) => reject("1"));
const promiseES12Two = new Promise((resolve, reject)=> resolve("2"));
const promiseES12Three = new Promise((resolve, reject)=> resolve("3"));

Promise.any([promiseES12one, promiseES12Two, promiseES12Three])
    .then(response => console.log(response));



